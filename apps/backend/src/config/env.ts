import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV : process.env.NODE_ENV || "developement",
    JWT_SECRET : process.env.JWT_SECRETKEY!,
    JWT_EXPIRES_IN : process.env.JWT_EXPIRES_IN || 45*60,
    REFRESH_TOKEN_EXPIRES_IN : process.env.REFRESH_TOKEN_EXPIRES_IN || 1,
    BASE_URL : process.env.BASE_URL || "www.google.com"
};