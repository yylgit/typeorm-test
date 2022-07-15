import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_83f78d22e3e01c0fc9af0cd5a2", ["name"], {})
@Entity("post_category", { schema: "test_migrate" })
export class PostCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;
}
