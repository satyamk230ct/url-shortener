import { z } from "zod";

export const createUrlSchema = z.object({
    originalUrl: z.url(),

    customAlias: z
        .string()
        .trim()
        .min(3)
        .max(30)
        .optional(),

    expiresAt: z.coerce.date().optional(),

    password: z
        .string()
        .min(4)
        .max(30)
        .optional(),

    isPrivate: z.boolean().optional()
});