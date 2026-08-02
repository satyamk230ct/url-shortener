import { Router } from "express";

const router = Router();

router.get("/health",(req,res)=>{
    return res.json({
        status : "Ok",
        message : "Router created"
    });
});

export default router;