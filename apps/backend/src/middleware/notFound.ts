import type {Request,Response} from "express"

export const notFound = (req: Request, res: Response) => {
    res.status(404).json({
        sucess: false,
        message: "Route not found"
    });
};