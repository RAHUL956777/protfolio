import express from "express";
import { login,logout,getUser,myProfile } from "../controller/User.js";
import {isAuthenticated} from "../middlewares/auth.js"

export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated,myProfile);
