import "reflect-metadata"
import { DataSource, DataSourceOptions, Between, Raw } from "../../src/index"


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

        dataSource.getRepository(Profile).findAndCount({
            select: ["id", "haha", 'photo', 'createTime'],
            where: {
                haha: 123,
                photo: undefined,
                createTime: Raw((alias) => `${alias} BETWEEN FROM_UNIXTIME(:start) AND FROM_UNIXTIME(:end)`, {
                    start: (Date.now() - 1000 * 60 * 60 * 24 * 7)/1000,
                    end:Date.now()/1000
                }),
            },
            order: {
                id: "DESC"
            },
            take: 1
            

        }).then(res=>{
            console.log(res)
        })
        // const user = new User()
        // user.name = "Joe Smith"

        // const profile = new Profile()
        // profile.id=100
        // 如果设置了主键 就先查询 再更新，如果不设置主键就直接插入
        // 设置了不存在的主键 也会先查询 再插入

        // 如果没有主键的情况呢， typeorm规定必须有主键
        // profile.gender = "123"
        // profile.photo = "me123.jpg"
        // profile.haha = 123
        // profile.haha = BigInt('123')
        // profile.user = user
        // try{
        //     await dataSource.manager.save(profile)
        // }
        // catch(e) {
        //     debugger
        //     console.log(e)
        // }

        // dataSource.manager.find(Profile).then((profiles) => {
        //     console.log(profiles)
        // })


       


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
