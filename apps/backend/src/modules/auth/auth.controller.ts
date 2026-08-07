import type { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { success } from "zod";

export class AuthController {
    private service = new AuthService();

    register = async (req: Request, res: Response) => {
        const user = await this.service.register(req.body);
        
        if(!user) {
            return res.status(404).json({
                success : false,
                message : "User not succesfully",
            });    
        }

        return res.status(201).json({
            success : true,
            message : "User register succesfully",
            data : user
        });
    }
}
