import { app } from "./app";
import { env } from "./config/env";

const PORT = process.env.PORT || 3000;


import { UserRepository } from "./modules/user/user.repository"

const repo = new UserRepository();


async function test() {
    let user = await repo.create({
        name:"satyam",
        email : "amsd",
        password: "psoad",
        isVerified: false
    });
    console.log(user);
}

test();

app.listen(env.PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});