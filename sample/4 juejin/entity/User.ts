import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn
} from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 20})
  name: string

  @UpdateDateColumn()
  updateTime: Date
}