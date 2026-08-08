import type { Request, Response } from "express";
import { UrlService } from "./url.service";
import { asyncHandler } from "../../utils/asyncHandler";

export class UrlController {

    private service = new UrlService();

    create = asyncHandler(
        async (req: Request, res: Response) => {
            const userId = req.user!.id;
            const result = await this.service.createUrl(req.body,userId);
            res.status(201).json({
                success: true,
                message: "Short URL created successfully",
                data: result
            });
        }
    );

    me = asyncHandler(
        async (req: Request, res: Response) => {
            res.json({
                success: true,
                data: req.user
            });
        }
    );

    
}