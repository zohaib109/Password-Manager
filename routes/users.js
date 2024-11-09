import express from "express";
import { handleUserSignup, handleUserLogin } from "../controllers/users.js";

const usersRouter = express.Router();

usersRouter.post("/signup", handleUserSignup);
usersRouter.post("/login", handleUserLogin);

export default usersRouter;
