import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const uri = process.env.MONGODB_URL;

        if (!uri) {
            throw new Error("MONGODB_URL environment variable is missing");
        }

        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB CONNECTION FAILED:", error.name, error.message);
        throw error;
    }
};

export default connectDb;
