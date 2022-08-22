import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./datasource";
import { app } from "./app";
import swagger from "./utils/swagger";
import logger from "./utils/logger";

const port = process.env.APP_PORT || "8000";

AppDataSource.initialize()
    .then(() => {
        logger.info("[Startup - Database Connection] DataSource initialized");
        app.listen(port, () => {
            logger.info(`[Startup - Server] App running on http://localhost:${port}/`);
            swagger(app, port);
        });
    })
    .catch((e) => {
        logger.error(e);
    });
