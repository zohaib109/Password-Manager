import express from "express";
import { handleAddNewPassword } from "../controllers/passwords.js";

const passwordsRouter = express.Router();

passwordsRouter.post("/", handleAddNewPassword);
// passwordsRouter.patch("/", handleUpdatePassword);
// passwordsRouter.delete("/", handleDeletePassword);
// passwordsRouter.get("/", handleGetPasswords);

export default passwordsRouter;
