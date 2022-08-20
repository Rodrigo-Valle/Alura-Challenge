import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./datasource";
import { app } from "./app";
import swagger from "./utils/swagger";
import logger from "./utils/logger"


const port = process.env.APP_PORT || "8000";

AppDataSource.initialize()
    .then(() => {
        logger.info("[Startup - DataBase] DataSource initialized");
        app.listen(port, () => {
            logger.info(`[Startup - Server] Express server has started on port ${port} . Open http://localhost:${port}/ to see results`);
            swagger(app, port)
        });
    })
    .catch((e) => {
        logger.error(e);
    });
