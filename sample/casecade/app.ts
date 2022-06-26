import "reflect-metadata"
import { DataSource, DataSourceOptions } from "../../src/index"
import { Category } from "./entity/Category"
import { Question } from "./entity/Question"

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
        Category,
        Question,
        User,
        Profile,
        Photo,
        PhotoUser,
    ],
}

const dataSource = new DataSource(options)
dataSource.initialize().then(
    async (dataSource) => {
        // const category1 = new Category()
        // category1.name = "ORMs"

        // const category2 = new Category()
        // category2.name = "Programming"

        // const question = new Question()
        // question.title = "How to ask questions?"
        // question.text = "Where can I ask TypeORM-related questions?"
        // question.categories = [category1, category2]
        // dataSource.manager.save(question)

        // dataSource.manager.find(Question, {
        //     relations: {
        //         categories: true,
        //     },
        // }).then(questions => {
        //     console.log(questions)
        // })

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

        // dataSource.manager.find(Profile, {
        //     relations: {
        //         user: true,
        //     }
        // }).then(users => {
        //     console.log(users)
        // })

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
