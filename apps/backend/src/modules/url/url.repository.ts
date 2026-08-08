import prisma from "../../db/prisma";

export class UrlRepository {

    async findByShortCode(shortCode: string) {
        return prisma.url.findUnique({
            where: {
                shortCode
            }
        });
    }

    async create(data: {
        originalUrl: string;
        shortCode: string;
        
        title?: string;
        
        description? : string;
        isPrivate: boolean;

        userId: string;
        expiresAt?: Date;
    }) {
        return prisma.url.create({
            data
        });
    }
}