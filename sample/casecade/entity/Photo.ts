import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PhotoUser } from "./PhotoUser"

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => PhotoUser, (user) => user.photos)
    photoUser: PhotoUser
}