import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post", { schema: "test_migrate" })
export class Post {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "text", length: 255 })
  text: string;

  @Column("datetime", { name: "deleteDate", nullable: true })
  deleteDate: Date | null;

  @Column("datetime", {
    name: "createTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("datetime", {
    name: "createDate",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createDate: Date;

  @Column("int", { name: "categoryId", nullable: true })
  categoryId: number | null;
}
