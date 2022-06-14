import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { Post } from "./entity/Post"

const options: DataSourceOptions = {
    name: "sap",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "test1",
    logging: true,
    synchronize: true,
    entities: [Post],
}

const dataSource = new DataSource(options)
dataSource.initialize().then(
    async (dataSource) => {
        let post = new Post()
        post.text = "Hello how are you?"
        post.title = "hello"
        post.likesCount = 100

        let postRepository = dataSource.getRepository(Post)

        // postRepository
        //     .save(post)
        //     .then((post) => console.log("Post has been saved: ", post))
        //     .catch((error) => console.log("Cannot save. Error: ", error))

      //  let result = await postRepository.createQueryBuilder('post').getMany()
       let rawresult = await postRepository.createQueryBuilder('post').select('post.createTime').getMany()
      //  console.log(result)
       console.log(rawresult)
          
    },
    (error) => console.log("Cannot connect: ", error),
)
