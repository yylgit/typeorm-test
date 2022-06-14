import { Column, Entity, PrimaryColumn, Generated, ViewEntity, DataSource } from "typeorm"

@Entity()
export class Tool {
  @PrimaryColumn()
  id: number
  @Column()
  idx_organization_id: number
}

@Entity()
export class Push {
  @PrimaryColumn()
  id: number
  @Column()
  idx_tool_id: number
  @Column()
  name:string

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


@ViewEntity({
  expression: (dataSource: DataSource) =>
  dataSource
  .createQueryBuilder()
  .select("tool.id", "tool_id")
  .addSelect("tool.idx_organization_id", "idx_organization_id")
  .addSelect("push.name", "pusn_name")
  .addSelect("push.createTime", "push_createTime")
  .from(Tool, "tool")
  .leftJoin(Push, "push", "tool.id = push.idx_tool_id"),
})
export class ToolPushView {
    @PrimaryColumn()
    tool_id: number

    @Column()
    idx_organization_id: number

    @Column()
    pusn_name: string

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
    push_createTime: number
    
}
