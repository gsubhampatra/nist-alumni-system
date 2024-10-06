import express from "express";
import {
  getUserByUsername,
  login,
  register,
  userVerification,
  userVerificationRequest,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
userRouter.route("/profile").get(getUserByUsername);
userRouter.route("/verify-request").post(userVerificationRequest);
userRouter.route("/verify").post(userVerification);
export default userRouter;
