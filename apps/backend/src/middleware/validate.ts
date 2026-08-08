import type { Request, Response, NextFunction } from "express";

import z from "zod";
import { AppError } from "../errors/AppError";

export const validate = (schema : z.ZodType) => {
    return (req:Request,_res:Response,next:NextFunction)=>{

        const result = schema.safeParse(req.body);

        if(!result.success) {
            const firstIssue = result.error.issues[0];
            const message = firstIssue?.message ?? "Validation failed";
            return next(new AppError(message, 400));
        }

        req.body = result.data;

        next();
    }
}