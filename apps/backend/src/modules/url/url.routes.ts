import { Router } from "express";
import { UrlController } from "./url.controller";
import { validate } from "../../middleware/validate";
import { createUrlSchema } from "./url.schema";
import { authMiddleware } from "../../middleware/auth";

const router = Router();

const controller = new UrlController();

router.post("/",
    authMiddleware,
    validate(createUrlSchema),
    controller.create
);

router.get(
    "/me",
    authMiddleware,
    controller.me
);

export default router;