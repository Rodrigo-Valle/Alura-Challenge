import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./datasource";
import { app } from "./app";
import swaggerDocs from "./utils/swagger";


const port = process.env.APP_PORT || "8000";

AppDataSource.initialize()
    .then(() => {
        console.log("DataSource initialized");
        app.listen(port, () => {
            console.log(`Express server has started on port ${port} . Open http://localhost:${port}/ to see results`);
            swaggerDocs(app, port)
        });
    })
    .catch((e) => {
        console.log(e);
    });
