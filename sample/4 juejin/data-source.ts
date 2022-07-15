import { DataSource, DataSourceOptions } from "../../src/index"
import { User } from "./entity/User"


export default new DataSource({
  type: "mysql",
  name: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "test_juejin",
  // database: "test_relations",
  logging: ["query", "error"],
  entities: [User],
  synchronize: false,
  // migrationsTableName: 'custom_migrations_table',
  migrations: [__dirname + "/custom-migrations/*{.js,.ts}"],
})
// npx typeorm-ts-node-esm migration:generate ./custom-migrations/update-post-table -d ./data-source.ts
// npx typeorm-ts-node-esm migration:run  -d ./data-source.ts
// npx typeorm-ts-node-esm migration:revert  -d ./data-source.ts