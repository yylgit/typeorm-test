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

    @Column()
    title: string

    @ManyToOne((type) => Author, {
        cascade: ["insert"],
    })
    author: Author
}
