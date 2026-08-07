import prisma from "../../db/prisma";

export class UserRepository {
    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where : {
                email
            }
        })
    };

   async create(data: {
        email: string;
        password: string;
        name: string;
        isVerified: boolean;
    }) 
    {
        return prisma.user.create({
            data
        });
    }
}