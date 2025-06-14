import express from "express";
import path from "path";
import "dotenv/config";

import sessionConfiguration from "./middlewares/sessionConfig.js";
import mongooseConnection from "./utilities/database.js";
import staticRouter from "./routes/staticRouter.js";
import usersRouter from "./routes/users.js";
import dashboardRouter from "./routes/dashboardRouter.js";
import passwordsRouter from "./routes/passwords.js";
import errorHandler from "./middlewares/errorHandler.js";

// Initialize express app and constants
const app = express();
const PORT = process.env.PORT || 3050;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/password-manager";

// Basic Express Configuration
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(sessionConfiguration)

// Routes
app.use("/", staticRouter);
app.use("/user", usersRouter);
app.use("/dashboard", dashboardRouter);
app.use("/passwords", passwordsRouter);

// Central Error Handler Middleware
app.use(errorHandler);

// Start server
async function startServer() {
  try {
    await mongooseConnection(MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server started at Port: ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
