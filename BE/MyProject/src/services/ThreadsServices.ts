import { AppDataSource } from '../data-source'
import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { Thread } from '../entities/Thread'

class ThreadsService {
    private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread)

    async find(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession
            // console.log("ini isi loginsessin:", loginSession)
            const threads = await this.threadRepository.find({
                relations : ["user","likes.user","replies"],
                order: {
                    id: "DESC"
                }
            })
            let responseNew = []
            threads.forEach((thread) => {
                responseNew.push({
                    ...thread,
                    id: thread.id,
                    content: thread.content,
                    image: thread.image,
                    user: thread.user,
                    likes_count: thread.likes.length,
                    replies_count: thread.replies.length,
                    is_liked: thread.likes.some(
                        (like: any) => like.user.id === loginSession.user.id
                    )
                })
            })
            // console.log("ini responseNew:", responseNew)
            return res.status(200).json(responseNew)  
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async findThreadById(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession
            // console.log("ini isi loginsessin:", loginSession)
            const threads = await this.threadRepository.find({
                where : {
                    user: loginSession.user,
                },
                relations : ["user","likes.user","replies"],
                order: {
                    id: "DESC"
                }
            })
            let responseNew = []
            threads.forEach((thread) => {
                responseNew.push({
                    ...thread,
                    id: thread.id,
                    content: thread.content,
                    image: thread.image,
                    user: thread.user,
                    likes_count: thread.likes.length,
                    replies_count: thread.replies.length,
                    is_liked: thread.likes.some(
                        (like: any) => like.user.id === loginSession.user.id
                    )
                })
            })
            // console.log("ini responseNew:", responseNew)
            return res.status(200).json(responseNew)  
        } catch (error) {
            throw new Error(error.message)
        }
    }
    // async create(req: Request, res: Response) {
    //     const data = req.body;
    //     const filename = res.locals.filename
    //     const loginSession = res.locals.loginSession;
    //     console.log(loginSession)
    
    //     try {
    //         const user = loginSession.user
    
    //         const threadCreate = this.threadRepository.create({
    //             content: data.content,
    //             image: filename,
    //             user: user,
    //         });
    
    //         const createThread = await this.threadRepository.save(threadCreate);
    
    //         return res.status(200).json(createThread);
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // }
    

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        try {
            const threads = await this.threadRepository.findOne({
            where : {
               id: id,
            },
            relations : ["user","likes.user","replies"]
        })
        const responseNew = {
            ...threads,
                replies_count: threads.replies.length,
                likes_count:  threads.likes.length,
            }
        return res.status(200).json(responseNew)
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

    // async update(req: Request, res: Response) {
    //     const loginSession = res.locals.loginSession;
    
    //     try {
    //         const threads = await this.threadRepository.findOne({
    //             where: {
    //                 user: {
    //                     id: loginSession.user.id
    //                 }
    //             },
    //             relations: ["user"] 
    //         });
    //         if (!threads) {
    //             return res.status(404).json({ error: "Thread not found" });
    //         }
    
    //         const data = req.body;
    
    //         threads.user.full_name = data.full_name;
    //         threads.user.username = data.username;
    //         threads.user.picture = data.picture;
    //         threads.user.description = data.description;
    
    //         // if (data.content != "") {
    //         //     threads.content = data.content;
    //         // } 
    //         // if (data.image != "") {
    //         //     threads.image = data.image;
    //         // } 
    
    //         const updateThread = await this.threadRepository.save(threads);
    //         return res.status(200).json(updateThread);
    //     } catch (error) {
    //         return res.status(500).json({ error: error.message });
    //     }
    // }
    
}
export default new ThreadsService()