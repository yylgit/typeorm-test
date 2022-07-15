import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("custom_migrations_table", { schema: "test_migrate" })
export class CustomMigrationsTable {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("bigint", { name: "timestamp" })
  timestamp: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;
}
