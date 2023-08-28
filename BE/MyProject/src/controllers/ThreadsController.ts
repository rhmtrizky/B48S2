import * as express from "express"
import { Request, Response } from "express"
import ThreadsService from "../services/ThreadsServices"
import UpdateUserService from "../services/UpdateUserService"

class ThreadsController {
    
    async find(req: Request, res: Response) {
        ThreadsService.find(req, res)
    }
    async findThreadById(req: Request, res: Response) {
        ThreadsService.findThreadById(req, res)
    }
    async update(req: Request, res: Response) {
        console.log("contorller",req.body);
        
        UpdateUserService.update(req, res)
    }
    async findOne(req: Request, res: Response) {
        ThreadsService.findOne(req, res)
    }
    delete(req: Request, res: Response) {
        ThreadsService.delete(req, res)
    }
    // async update(req: Request, res: Response) {
    //     UpdateService.update(req, res)
    // }

    
}

 export default new ThreadsController()