const { Router } = require("express");
const {
    getUserData,
    createUserData,
    loginData,
} = require("../controller/usercontroller");
const User = require("../models/userschema");

const userRouter = Router();

userRouter.get("/", getUserData);
userRouter.post("/", createUserData);
userRouter.post("/login", loginData);
module.exports = userRouter;