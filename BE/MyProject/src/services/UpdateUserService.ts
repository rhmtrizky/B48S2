import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

class UpdateUserService {
    private readonly userRepository: Repository<User> = AppDataSource.getRepository(User);

    async update(req: Request, res: Response): Promise<Response> { 
 
        const id = parseInt(req.params.id) 
        const { username, full_name, description } = req.body 

        console.log(req.body);
         
        try { 
            const userData = await this.userRepository.findOne( 
                { 
                    where: { 
                        id: id  
                    }, 
                    // relations: ['thread', 'like', 'replies', 'follow'] 
                } 
            ); 
            
            userData.username = username 
            userData.full_name = full_name
            userData.description = description 
            // userData.picture = picture 
            
            const NewUserData = await this.userRepository.save(userData) 
            console.log("ini userdata", NewUserData);

            return res.status(200).json( 
                NewUserData 
            ) 
        } catch (error) { 
            return res.status(500).json({ error: "Error mas bro" }) 
 
        } 
    }
}

export default new UpdateUserService();
