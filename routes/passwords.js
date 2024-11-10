import express from "express";
import { handleAddNewPassword, handleDeletePassword, handleEditPassword } from "../controllers/passwords.js";

const passwordsRouter = express.Router();

passwordsRouter.post("/", handleAddNewPassword);
passwordsRouter.delete("/", handleDeletePassword);
passwordsRouter.post("/:id", handleEditPassword);

export default passwordsRouter;
