import "reflect-metadata"
import { DataSource, DataSourceOptions } from "../../src/index"
import { Post } from "./entity/Post"
import { Author } from "./entity/Author"

const options: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "test_relations",
    synchronize: true,
    migrationsTableName: 'custom_migrations_table',
    migrations: [__dirname + "/custom-migrations/*{.js,.ts}"],
    logging: ["query", "error"],
    entities: [Post, Author],
}

const dataSource = new DataSource(options)
dataSource
    .initialize()
    .then(async (dataSource) => {
        // await dataSource.undoLastMigration()

        // first insert all the data
        // let author = new Author()
        // author.firstName = "Umed"
        // author.lastName = "Khudoiberdiev"

        // let post = new Post()
        // post.title = "hello"
        // post.author = author

        // let postRepository = dataSource.getRepository(Post)

        // await postRepository.save(post)
        // console.log(
        //     "Database schema was created and data has been inserted into the database.",
        // )

        // // close connection now
        // await dataSource.destroy()

        // now re-initialize data source
        // dataSource = new DataSource({
        //     type: "mysql",
        //     name: "mysql",
        //     host: "localhost",
        //     port: 3306,
        //     username: "root",
        //     password: "123456",
        //     database: "test_relations",
        //     logging: ["query", "error"],
        //     entities: [Post, Author],
        //     synchronize: false,
        //     migrationsTableName: 'custom_migrations_table',
        //     migrations: [__dirname + "/migrations/*{.js,.ts}"],
        // })
        // await dataSource.initialize()

        // // run all migrations
        // await dataSource.runMigrations()

        // and undo migrations two times (because we have two migrations)
        // await dataSource.undoLastMigration()
        // await dataSource.undoLastMigration()

        // console.log("Done. We run two migrations then reverted them.")
    })
    .catch((error) => console.log("Error: ", error))
