import "reflect-metadata"
import { DataSource, DataSourceOptions } from "../../src/index"


import { User } from "./entity/User"
import { Profile } from "./entity/Profile"

import { Photo } from "./entity/Photo"
import { PhotoUser } from "./entity/PhotoUser"


const options: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    dropSchema: true,
    database: "test_juejin",
    logging: ["query", "error"],
    synchronize: true,
    entities: [
        User,
    ],
}

const dataSource = new DataSource(options)
dataSource.initialize().then(
    async (dataSource) => {
        // const user = new User()
        // user.name = "Joe Smith"
        // await dataSource.manager.save(user)
    },
    (error) => console.log("Cannot connect: ", error),
)
