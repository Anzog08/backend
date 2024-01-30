import express from "express";

import {
  getUserByEmailService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../controller/usersController.js";

const userRouter = express.Router();

//get

userRouter.get("/users/:email", getUserByEmailService);

//post

userRouter.post("/signup", createUserService);

//put

userRouter.put("/update", updateUserService);

// //delete

userRouter.delete("/:email", deleteUserService);

// getUserByEmailService

export default userRouter;
