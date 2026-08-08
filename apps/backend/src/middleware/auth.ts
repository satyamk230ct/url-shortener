import type {
    NextFunction,
    Request,
    Response
} from "express";

import { verifyAccessToken } from "../utils/jwt";
import { UnauthorizedError } from "../errors/UnauthorizedError";

export const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next(
            new UnauthorizedError("Authorization header is missing")
        );
    }

    if (!authHeader.startsWith("Bearer ")) {
        return next(
            new UnauthorizedError("Invalid authorization header")
        );
    }

    const [,token] =  authHeader.split(" ");
    if (!token) {
        return next(
            new UnauthorizedError("Token is missing")
        );
    }

    try {
        const payload = verifyAccessToken(token);
        req.user = {
            id: payload.userId,
            email: payload.email
        };
        next();
    } catch {
        next(new UnauthorizedError("Invalid or expired token"));
    }

};