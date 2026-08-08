import { UrlRepository } from "./url.repository";
import { generateShortCode } from "../../utils/shortCode";
import type { CreateUrlDto } from "./url.types";
import { ConflictError } from "../../errors/ConflictError";
import { env } from "../../config/env";

export class UrlService {

    private repository = new UrlRepository();

    async createUrl(data: CreateUrlDto,userId: string) {

        let shortCode = data.customAlias || generateShortCode();

        // collision handling
        while (await this.repository.findByShortCode(shortCode)) {
            if (data.customAlias) {
                data.customAlias = undefined;   // to throw error only once
                throw new ConflictError("Custom alias already exists");
            }
            shortCode = generateShortCode();
        }

        const url = await this.repository.create({
            originalUrl: data.originalUrl,
            shortCode,
            userId,
            expiresAt: data.expiresAt,
            isPrivate: data.isPrivate ?? false
        });

        return {
            id: url.id,
            originalUrl: url.originalUrl,
            shortCode: url.shortCode,
            shortUrl: `${env.BASE_URL}/${url.shortCode}`
        };
    }
}