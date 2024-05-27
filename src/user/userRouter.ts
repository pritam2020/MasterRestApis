import express from "express";
import { createUser, loginUser } from "./userController";
const userRouter = express.Router();

userRouter.use('/register', createUser);
userRouter.use('/login', loginUser);

export default userRouter;