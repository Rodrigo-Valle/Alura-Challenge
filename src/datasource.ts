import "dotenv/config";
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
    entities: [__dirname + '/entity/**/*.entity.ts', __dirname + '/entity/**/*.entity.js'],
    migrations: [__dirname + '/migrations/**/*.ts', __dirname + '/migrations/**/*.js'],
    subscribers: []
});
