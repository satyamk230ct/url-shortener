import { Router } from "express";
import { AuthController } from "./auth.controller";
import { registerSchema } from "./auth.schema";
import { validate } from "../../middleware/validate";

const router = Router();

const controller = new AuthController();

// router.post("/register",validate(registerSchema),controller.register);

router.post(

"/register",

validate(registerSchema),

controller.register

);

export default router;