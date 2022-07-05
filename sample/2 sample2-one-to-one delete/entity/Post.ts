import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    CreateDateColumn
} from "typeorm";
import { PostDetails } from "./PostDetails"
import { PostCategory } from "./PostCategory"
import { PostAuthor } from "./PostAuthor"
import { PostInformation } from "./PostInformation"
import { PostImage } from "./PostImage"
import { PostMetadata } from "./PostMetadata"
import { JoinColumn } from "typeorm"

@Entity("sample2_post2")
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
        createForeignKeyConstraints: false
    })
    // @JoinColumn({ referencedColumnName: "name"})
    category: PostCategory

    @DeleteDateColumn({select: false})
    deleteDate: Date

    @Column({type: 'datetime',nullable: false, default: () => "CURRENT_TIMESTAMP", transformer:{
        to(value){
          return value as Date
        }, 
        from(value) {
          if(value instanceof Date) {
            return value.getTime()
          }
          return value
        }
      }})
    createTime: Date

    @CreateDateColumn()
    createDate: Date


}
