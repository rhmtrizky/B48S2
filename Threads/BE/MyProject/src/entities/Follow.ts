import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { User } from './User'
import { Thread } from "./Thread"

@Entity({name : "follows"})
export class Follow {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.followers, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    follower: User

    @ManyToOne(() => User, (user) => user.followings, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    followed: User

}