import { Column, Entity, PrimaryGeneratedColumn, Index } from "typeorm"

@Entity("sample2_post_category2")
export class PostCategory {
    @PrimaryGeneratedColumn()
    id: number

    @Index()
    @Column()
    name: string
}
