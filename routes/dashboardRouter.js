import express from "express";
import { handleFetchPasswordsFromDB } from "../controllers/dashboard.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", handleFetchPasswordsFromDB);

export default dashboardRouter;
