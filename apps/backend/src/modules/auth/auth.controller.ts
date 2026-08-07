import type { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { success } from "zod";
import { asyncHandler } from "../../utils/asyncHandler"

export class AuthController {

    private service = new AuthService();

    register = asyncHandler(  
        async (req: Request, res: Response) => {
            const user = await this.service.register(req.body);
            
            res.status(201).json({

            success:true,

            message:"User registered successfully",

            data:user

            });
        }
    );
}
