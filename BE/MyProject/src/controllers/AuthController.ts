import * as express from "express"
import { Request, Response } from "express"
import AuthorService from "../services/AuthorService"

class AuthController {
    register(req: Request, res: Response) {
        AuthorService.register(req, res)
    }
    login(req: Request, res: Response) {
        AuthorService.login(req, res)
    }
    check(req: Request, res: Response) {
        AuthorService.check(req, res)
    }
}

export default new AuthController()