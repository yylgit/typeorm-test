import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import {User} from './User'

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string

    @OneToOne(()=>User,(user)=>user.profile,{cascade:true})
    user: User
}