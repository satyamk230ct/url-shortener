import  z from "zod"

export const registerSchema = z.object({
    name : z.string().trim().min(3).max(50),
    email : z.email().transform((email)=>email.toLowerCase()),
    password : z.string().min(8).max(100)
});