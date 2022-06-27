import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm"
import { Profile } from "./Profile"

@Entity('nf_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToOne(() => Profile,(profile)=>profile.user, {createForeignKeyConstraints: false})
  @JoinColumn()
  profile: Profile
}