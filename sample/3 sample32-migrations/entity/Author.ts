import { Column, Entity, PrimaryGeneratedColumn } from "../../../src/index"

@Entity('migration_author')
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column({length: 10})
    lastName: string
}
