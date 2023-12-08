import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
