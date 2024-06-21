import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const DBconnect = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
      console.log("MongoDB Connection Successful")
    );
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};

export default DBconnect;
