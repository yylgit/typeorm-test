import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import {User} from './User'

@Entity('nf_photo_profile')
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