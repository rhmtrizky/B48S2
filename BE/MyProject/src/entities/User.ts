import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Thread } from '../entities/Thread'
import { Like } from './Like'
import { Reply } from './Reply'
import { Follow } from './Follow'


@Entity({name : "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    full_name: string

    @Column({select: false})
    email: string

    @Column({select: false})
    password: string

    @Column({nullable: true})
    picture: string

    @Column({nullable: true})
    description: string

    @OneToMany(() => Thread, (thread) => thread.user, {
        onDelete: "CASCADE"
    })
    threads: Thread[]
    like: Like[]
    reply: Reply[]
    follow: Follow[]
}
