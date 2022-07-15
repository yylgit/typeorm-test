import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 20})
  name: string
}