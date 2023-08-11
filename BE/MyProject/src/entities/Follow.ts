import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { User } from './User'
import { Thread } from "./Thread"

@Entity({name : "follows"})
export class Follow {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.follow)
    follower: number

    @ManyToOne(() => User, (user) => user.follow)
    followed: number

}