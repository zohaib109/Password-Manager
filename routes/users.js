import express from "express";
import { handleUserSignup, handleUserLogin, handleUserLogout } from "../controllers/users.js";

const usersRouter = express.Router();

usersRouter.post("/signup", handleUserSignup);
usersRouter.post("/login", handleUserLogin);
usersRouter.get("/logout", handleUserLogout);

export default usersRouter;
