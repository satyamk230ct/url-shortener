import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
    err : Error,_req: Request, 
    res: Response, _next: NextFunction
    ) => {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success : false,
            message : err.message
        });
    }

    console.log(err);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}