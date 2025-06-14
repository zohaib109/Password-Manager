import mongoose from "mongoose";

async function mongooseConnection(MONGO_URI) {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
}

export default mongooseConnection;
