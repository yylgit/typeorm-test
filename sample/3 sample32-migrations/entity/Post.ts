import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "../../../src/index"
import { Author } from "./Author"

@Entity('migration_post')
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 120})
    title: string

    @ManyToOne((type) => Author, {
        cascade: ["insert"],
    })
    author: Author
}
