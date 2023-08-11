import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from '../entities/User'
import { Like } from './Like'
import { Reply } from './Reply'
import { Follow } from './Follow'

@Entity({name : "threads"})
export class Thread {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    image: string

    @Column({type: "timestamp" , default: () => "CURRENT_TIMESTAMP"})
    posted_at: Date

    @ManyToOne(() => User, (user) => user.threads)
    user: User

    @OneToMany(() => Like, (like) => like.thread)
    like: Like[]

    @OneToMany(() => Reply, (reply) => reply.thread)
    reply: Reply[]
}
