import { Column, Entity, PrimaryColumn, Generated } from "typeorm"

@Entity()
export class Post {
    @PrimaryColumn()
    @Generated()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @Column({ nullable: false })
    likesCount: number
    // getRawMany not apply the transformer, so can use the view to solve the problem
    // the default type of the column is Date
    @Column({type: 'timestamp',nullable: false, default: () => "CURRENT_TIMESTAMP", transformer:{
      to(value){
        return value
      }, 
      from(value) {
        if(value instanceof Date) {
          return value.getTime()
        }
        return value
      }
    }})
    createTime: number
}
