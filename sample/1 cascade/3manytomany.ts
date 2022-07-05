import "reflect-metadata"
import { DataSource, DataSourceOptions } from "../../src/index"
import { Category } from "./entity/Category"
import { Question } from "./entity/Question"

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
        Question
    ],
}

const dataSource = new DataSource(options)
dataSource.initialize().then(
    async (dataSource) => {
        const category1 = new Category()
        category1.name = "ORMs"
        category1.id = 2

        // const category2 = new Category()
        // category2.name = "Programming22"
        // save 会自动的全量更新关联关系
        const question = new Question()
        question.id = 1
        question.title = "How to ask questions?"
        question.text = "Where can I ask TypeORM-related questions?"
        question.categories = [category1]
        dataSource.manager.save(question)

        dataSource.manager.find(Question, {
            relations: {
                categories: true,
            },
        }).then(questions => {
            console.log(questions)
        })

        // dataSource.manager.find(Category, {
        //     relations: {
        //         questions: true,
        //     },
        // }).then(questions => {
        //     console.log(questions)
        // })
        

    },
    (error) => console.log("Cannot connect: ", error),
)
