import bcrypt from "bcrypt"
import { AuthRepository } from "./auth.repository"
import type { RegisterDto }  from "./auth.types"
import { ConflictError } from "../../errors/ConflictError";

export class  AuthService {
    private repository = new AuthRepository();

    async register(data : RegisterDto) {
        const existingUser = await this.repository.findByEmail(data.email);

        if(existingUser) {
            throw new ConflictError("Email already exists");
        }

        const hashPassword = await bcrypt.hash(data.password,10);   // 10 time hashing

        const user = await this.repository.createUser({
            ...data,
            password : hashPassword
        });

        return {
            id : user.id,
            name : user.name,
            email : user.email
        };
    }
}