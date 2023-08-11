import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { User } from './User'
import { Thread } from "./Thread"

@Entity({name : "likes"})
export class Like {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    is_likes: boolean

    @ManyToOne(() => User, (user) => user.like)
    user: User

    @ManyToOne(() => Thread, (thread) => thread.like)
    thread: Thread
}