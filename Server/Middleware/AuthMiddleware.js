//Purpose: user authentication and authorization
import jwt from "jsonwebtoken";

import User from "../Models/UserModel.js";

//The 'protect' middleware is used to authenticate users and fetch their information from the database
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Corrected fallback value for JWT secret

      try {
        const decoded = jwt.verify(token, "Secret");
        res.locals.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        return res.status(401).json({
          success: false,
          message: error.message || "Not authorized, no token",
        });
      }
    } catch (error) {
     
      return res.status(401).json({
        success: false,
        message:  "Not authorized, token failed",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, no token",
    });
  }

  // If everything is fine, proceed to the next middleware or route handler
  next();
};
 const isAuth = async (req, res, next) => {
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "UnAuthorized",
      });
    }

    const user = await User.findById(decoded.id);

    res.locals.user = user;
    res.locals.user = user
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || "Not authorized, no token",
    });
  }
};

//The 'admin' middleware is used to check if the user is an admin
const admin = (req, res, next) => {
  if (res.locals.user && res.locals.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an Admin");
  }
};
export { protect, admin,isAuth };
