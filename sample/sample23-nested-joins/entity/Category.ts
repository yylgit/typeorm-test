import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "../../../src/index"
import { Author } from "./Author"


@Entity("sample23_category")
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany((type) => Author)
    @JoinTable()
    author: Author
}
