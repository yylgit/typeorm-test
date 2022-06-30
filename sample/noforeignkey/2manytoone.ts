import "reflect-metadata"
import { DataSource, DataSourceOptions } from "../../src/index"


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
        Photo,
        PhotoUser,
    ],
}

const dataSource = new DataSource(options)
dataSource.initialize().then(
    async (dataSource) => {
        // const photo1 = new Photo()
        // photo1.url = "me.jpg"

        // const photo2 = new Photo()
        // photo2.url = "me-and-bears.jpg"

        // const user = new PhotoUser()
        // user.name = "John"
        // user.photos = [photo1, photo2]
        // await dataSource.manager.save(user)


        // const user = new PhotoUser()
        // user.name = "Leo"

        // const photo1 = new Photo()
        // photo1.url = "me.jpg111111"
        // photo1.photoUser = user
        // await dataSource.manager.save(photo1)

        // const photo2 = new Photo()
        // photo2.url = "me-and-bears.jpg1111"
        // photo2.photoUser = user
        // await dataSource.manager.save(photo2)

        // dataSource.manager.find(Photo, {
        //     relations: {
        //         photoUser: true,
        //     }
        // }).then(users => {
        //     console.log(users)
        // })

        dataSource.manager.find(PhotoUser, {
            relations: {
                photos: true,
            }
        }).then(users => {
            console.log(users)
        })

        // 如何删除外键的主表 如果有关联关系直接删除会失败
        // await dataSource.manager.delete(PhotoUser, {id: 3})

        // 级联删除 失败  需要手动先删除外键表的记录 后再删除
        // let user = await dataSource.manager.findOne(PhotoUser, {where: {id: 3}, relations:{photos: true}})
        // console.log(user)
        // await dataSource.manager.delete(PhotoUser, user)
    },
    (error) => console.log("Cannot connect: ", error),
)
