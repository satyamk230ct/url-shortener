import bcrypt from "bcrypt"
import { AuthRepository } from "./auth.repository"
import type { RegisterDto, LoginDto }  from "./auth.types"
import { ConflictError } from "../../errors/ConflictError";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { generateAccessToken } from "../../utils/jwt";

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

    async login(data : LoginDto) {
        const user = await this.repository.findByEmail(data.email);
        if(!user) {
            throw new UnauthorizedError("Invalid credentials user does not exist");
        }

        const valid = await bcrypt.compare(data.password,user.password);

        if(!valid) {
            throw new UnauthorizedError("Invalid password");
        }

        const accessToken = generateAccessToken({
            userId : user.id,
            email : user.email
        });

        return {
            accessToken,
            user : {
                id : user.id,
                name : user.name,
                email : user.email
            }
        };
    }
}