import { AppDataSource } from '../data-source'
import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { Thread } from '../entities/Thread'

class ThreadsService {
    private readonly threadRepository: Repository<Thread> =
        AppDataSource.getRepository(Thread)

    async find(req: Request, res: Response) {
        try {
            const threads = await this.threadRepository.find({
                relations : ["user","like","reply"]
            })
            // let responseNew = []
            // threads.forEach(element => {
            //     responseNew.push ({
            //         ...element,
            //         likes_count: 24,
            //         is_liked: true,
            //         replies_count: 13,
            //     })
            // })
            return res.status(200).json(threads)   
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async create(req: Request, res: Response) {
        const data = req.body
        try {
            const threads = this.threadRepository.create({
                content: data.content,
                image: data.image
            })
            const createThread = this.threadRepository.save(threads)
            return res.status(200).json(createThread)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        try {
            const threads = await this.threadRepository.findOne({
              
            where : {
                id: id
            },
            relations : ["user","like","reply"]
        })
        return res.status(200).json(threads)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        try {
            const threads = await this.threadRepository.delete(id)
            return res.status(200).json(threads)
        } catch (error) {
            return res.status(500).json("ERROR")
        } 
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        try {
        const threads = await this.threadRepository.findOne({
            where : {
                id : id
            }
        })
        const data = req.body

        if (data.content != "") {
            threads.content = data.content
        }
        if (data.image != "") {
            threads.image = data.image
        }
        const updateThread = this.threadRepository.save(threads)
        return res.status(200).json(updateThread)
        } catch (error) {
            return res.status(500).json("ERROR")
        }
    }
}
export default new ThreadsService()