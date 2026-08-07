import prisma  from "../../db/prisma";   
import type { RegisterDto } from "./auth.types";

export class AuthRepository {
    async findByEmail(email:string) {
        return prisma.user.findFirst({
            where : {
                email
            }
        });
    }

    async createUser(data :RegisterDto) {
        return prisma.user.create({
            data
        });
    }
}