import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { PostDetails } from "./PostDetails"
import { PostCategory } from "./PostCategory"
import { PostAuthor } from "./PostAuthor"
import { PostInformation } from "./PostInformation"
import { PostImage } from "./PostImage"
import { PostMetadata } from "./PostMetadata"
import { JoinColumn } from "typeorm"

@Entity("sample2_post4")
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    // post has relation with category, however inverse relation is not set (category does not have relation with post set)
    @OneToOne((type) => PostCategory, {
        cascade: true,  
    })
    @JoinColumn([
        { name: 'category_id', referencedColumnName: "id" },
        { name: 'category_name', referencedColumnName: "name" }
    ])
    category: PostCategory
}
