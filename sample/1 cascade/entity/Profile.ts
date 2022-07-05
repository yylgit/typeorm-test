import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Unique } from "typeorm"
import {User} from './User'

@Entity()
@Unique(['photo'])
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string

    @OneToOne(()=>User,(user)=>user.profile,{cascade:true, eager:true})
    user: User
}