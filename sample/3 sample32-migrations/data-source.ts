import { DataSource, DataSourceOptions } from "../../src/index"
import { Post } from "./entity/Post"
import { Author } from "./entity/Author"

export default new DataSource({
  type: "mysql",
  name: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  // database: "test_migrate",
  database: "test_relations",
  logging: ["query", "error"],
  entities: [ Author],
  synchronize: false,
  migrationsTableName: 'custom_migrations_table',
  migrations: [__dirname + "/custom-migrations/*{.js,.ts}"],
})
// npx typeorm-ts-node-esm migration:generate ./custom-migrations/update-post-table -d ./data-source.ts
// npx typeorm-ts-node-esm migration:run  -d ./data-source.ts