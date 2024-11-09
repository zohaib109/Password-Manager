import mongoose from "mongoose";

async function mongooseConnection(databaseName) {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${databaseName}`);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
}

export default mongooseConnection;