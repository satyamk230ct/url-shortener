export interface CreateUrlDto {
    originalUrl: string;
    customAlias?: string;
    expiresAt?: Date;
    isPrivate?: boolean;
}