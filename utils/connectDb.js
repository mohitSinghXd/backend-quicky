
import mongoose from "mongoose";

const connectDb = async () => {
  const uri = "mongodb+srv://mohitsinghbuilds_db_user:mohitsingh121@cluster0.vzqcnkn.mongodb.net/NotesAi?appName=Cluster0"

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
