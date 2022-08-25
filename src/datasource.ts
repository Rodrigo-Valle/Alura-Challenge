import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB || ""),
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.entity.ts", "dist/entity/*.entity.js"],
    migrations: ["src/migrations/**/*.ts", "dist/migrations/*.js"],
    subscribers: [],
});
