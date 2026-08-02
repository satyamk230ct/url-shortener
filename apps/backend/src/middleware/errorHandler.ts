import type { NextFunction , Request, Response } from "express";

function ErrorHandFunc(err:Error,_req : Request,res : Response) {
    console.error(err);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}

export const errorHandler = ErrorHandFunc