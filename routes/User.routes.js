import express from "express";
import { LoginUser, RegisterUser } from "../controller/user.controller.js";
const router = express.Router();

router.route("/register").post(RegisterUser)
router.route("/login").post(LoginUser)

export default router