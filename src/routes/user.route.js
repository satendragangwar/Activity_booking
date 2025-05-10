import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { registerUserValidator, loginUserValidator } from "../validators/user.validator.js";
import { validate } from "../validators/validate.js";

const router = Router();

router.route("/register").post(registerUserValidator(), validate, registerUser);
router.route("/login").post(loginUserValidator(), validate, loginUser);

export default router; 