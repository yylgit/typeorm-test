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
    database: "test_relations",
    logging: ["query", "error"],
    synchronize: true,
    entities: [
        User,
        Profile,
        Photo,
        PhotoUser,
    ],
}

const dataSource = new DataSource(options)
dataSource.initialize().then(
    async (dataSource) => {

        // const user = new User()
        // user.name = "Joe Smith"

        // const profile = new Profile()
        // profile.gender = "male"
        // profile.photo = "me.jpg"
        // profile.user = user
        // await dataSource.manager.save(profile)


        // const profile = new Profile()
        // profile.gender = "male"
        // profile.photo = "me.jpg"

        // const user = new User()
        // user.name = "Joe Smith"
        // user.profile = profile
        // await dataSource.manager.save(user)


       
        // dataSource.manager.find(User, {
        //     relations: {
        //         profile: true,
        //     }
        // }).then(users => {
        //     console.log(users)
        // })

        dataSource.manager.find(Profile, {
            relations: {
                user: true,
            }
        }).then(users => {
            console.log(users)
        })

        // const users = await dataSource
        //     .getRepository(User)
        //     .createQueryBuilder("user")
        //     .leftJoinAndSelect("user.profile", "profile")
        //     .getMany()
        // console.log(users)

        // const profiles = await dataSource
        //     .getRepository(Profile)
        //     .createQueryBuilder("profile")
        //     .leftJoinAndSelect("profile.user", "user")
        //     .getMany()
        //     console.log(profiles)





    },
    (error) => console.log("Cannot connect: ", error),
)
