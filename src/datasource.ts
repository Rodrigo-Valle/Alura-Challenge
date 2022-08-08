import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB || ""),
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    synchronize: false,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/database/migration/*{.js,.ts}"],
    subscribers: [],
});