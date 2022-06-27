import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PhotoUser } from "./PhotoUser"

@Entity('nf_photo')
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => PhotoUser, (user) => user.photos, {
        createForeignKeyConstraints: false,
        eager: true
    })
    photoUser: PhotoUser
}