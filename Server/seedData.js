import Product from "./Models/ProductModel.js";
import User from "./Models/UserModel.js";
import products from "./data/Products.js";
import users from "./data/users.js";
import connectDatabase from "./config/MongoDb.js";

//First Connect to database
connectDatabase();

const insetUsers = async () => {
  console.log("=== Inserting Users ===");
  console.time("User Insertion");

  try {
    await User.remove({});
    const importUser = await User.insertMany(users);
    console.log("Inserted Users =>", importUser.length);
  } catch (error) {
    console.error("Error inserting users:", error.message);
  }

  console.timeEnd("User Insertion");
  console.log("=======================\n");
};

const insetProducts = async () => {
  console.log("=== Inserting Products ===");
  console.time("Product Insertion");

  try {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    console.log("Inserted Products =>", importProducts.length);
  } catch (error) {
    console.error("Error inserting products:", error.message);
  }

  console.timeEnd("Product Insertion");
  console.log("==========================\n");
};

//Insert Data
const runDataInsertion = async () => {
  await insetUsers();
  await insetProducts();
  console.log("=== Data Insertion Complete ===");
};

runDataInsertion();
