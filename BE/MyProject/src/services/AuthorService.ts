import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from "../entities/User";
import { loginSchema, registerSchema } from "../utils/author";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

class AuthorService {
    
    private readonly authRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(req: Request, res:Response) {
    try {
        const data = req.body
        const { error, value} = registerSchema.validate(data)
        if (error) {
            return res.status(400).json({ error: error})
        }
        const password = bcrypt.hash(data.password, 10)

        const checkEmail = await this.authRepository.count (
            {
                where : {
                    email: value.email,
                    username: value.username,
                }
            }
        )
        if (checkEmail > 0)  {
            return res.status(400).json("Email/password salah!")
        }
        const user = this.authRepository.create({
            full_name: data.full_name,
            username: data.username,
            email: data.email,
            password: data.password,
        })
        const createdUser = this.authRepository.save(user)
        return res.status(200).json(createdUser)
    } catch (error) {
        return res.status(500).json("Terjadi kesalahan  pada server")
    }
}

    async login(req: Request, res:Response) {
    try {
        const data = req.body
        const { error, value} = loginSchema.validate(data)
        if (error) {
            return res.status(400).json({ error: error})
        }

        const checkEmail = await this.authRepository.findOne (
            {
                where : {
                    email: value.email,
                    // username: value.username,
                },
                select: ["id", "full_name", "username", "email", "password"]
            }
        )

        if (!checkEmail) {
            return res.status(400).json("Email/password salah!")
        }
        const isPasswordValid = bcrypt.compare(value.password, checkEmail.password)
        if (!isPasswordValid) {
            return res.status(400).json("Email/password salah!")
        }
        const user = this.authRepository.create ({
            id: checkEmail.id,
            full_name: checkEmail.full_name,
            username: checkEmail.username,
            email: checkEmail.email,
        })
        const token = jwt.sign({user}, "bagianSecret", {expiresIn: "1h"})

        // const tokenJWT = jwt.sign(user,"secretkey")
        return res.status(200).json({
            user,
            token,
        })
    } catch (error) {
        return res.status(500).json("Terjadi kesalahan  pada server")
    }
}

    async check(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession

            const user = await this.authRepository.findOne ({
                where: {
                    id: loginSession.user.id,
                },
                select: ["id", "full_name", "username", "email", "password"]
            })
            return res.status(200).json({
                user,
                message: "token is valid"
            })
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan  pada server")
        }
    }
}

export default new AuthorService()
