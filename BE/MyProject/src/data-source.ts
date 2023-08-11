import "reflect-metadata"
import { DataSource } from "typeorm"
import { Thread } from "./entities/Thread"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "125438",
    database: "db_threads_be",
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})
