import prisma  from "../../db/prisma";   
import type { RegisterDto } from "./auth.types";

export class AuthRepository {
    
    async createUser(data :RegisterDto) {
        return prisma.user.create({
            data
        });
    }

    async findByEmail(email:string) {
        return prisma.user.findUnique({
            where : { email }
        });
    }

}