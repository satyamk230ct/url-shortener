import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import urlRoutes from "../modules/url/url.routes.ts";
import { ApiResponse } from "../utils/apiResponse"


const router = Router();

router.use("/auth", authRoutes);
router.use("/urls", urlRoutes);

router.get("/health",(req,res)=>{
    res.json(
        new ApiResponse(true, "Health check successful")
    );
});

export default router;