import { Column, Entity, PrimaryGeneratedColumn, Index } from "typeorm"




@Index(['id','name'])
@Entity("sample2_post_category4")
export class PostCategory {
    @PrimaryGeneratedColumn()
    id: number

    @Index()
    @Column()
    name: string
}
