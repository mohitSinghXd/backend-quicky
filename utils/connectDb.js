
import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGODB_URL

  if (!uri) {
    throw new Error("MONGODB_URL is missing from environment variables");
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDb;
