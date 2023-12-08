import express from "express";
import asyncHandler from "express-async-handler";
import { admin, isAuth } from "../Middleware/AuthMiddleware.js";
import User from "./../Models/UserModel.js";
import bcryptjs from "bcryptjs";

import { removeToken, sendToken } from "../utils/jwtToken.js";

const userRouter = express.Router();

// LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      user.password = undefined;

      sendToken(user, 200, res);
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

userRouter.post("/logout", asyncHandler(async (req, res) => {

  removeToken(res);
}));

// REGISTER
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email, 
      password: bcryptjs.hashSync(password),
    });
    if (user) {
      user.password = undefined;
      sendToken(user, 200, res);
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);

userRouter.get(
  "/me",
  isAuth,
  asyncHandler(async (req, res) => {
    return res.status(200).json(res.locals.user);
  })
);

// PROFILE
userRouter.get(
  "/profile",
  isAuth,
  asyncHandler(async (req, res) => {
    const user = await User.findById(res.locals.user._id).select("-password");

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// UPDATE PROFILE
// UPDATE PROFILE
userRouter.put(
  "/profile",
  isAuth,
  asyncHandler(async (req, res) => {
    const userId = res.locals.user._id;
    const { name, email, password } = req.body;

    // Prepare the update data based on the fields provided in the request body
    const updateData = {};
    if (name) {
      updateData.name = name;
    }
    if (email) {
      updateData.email = email;
    }
    if (password) {
      updateData.password = password;
    }

    // Find the user and update the data using findOneAndUpdate with upsert option
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId }, // Find by user ID
      updateData, // Update data
      { new: true, upsert: true, projection: { password: 0 } } // Options: return the updated document, create if not found (upsert), and exclude the password field
    );

    if (updatedUser) {
      return res.json(updatedUser);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// GET ALL USER ADMIN
userRouter.get(
  "/",
  isAuth,
  admin,
  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);

export default userRouter;
