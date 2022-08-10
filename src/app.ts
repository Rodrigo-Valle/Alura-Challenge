import express from "express";
import * as bodyParser from "body-parser";
import routes from "./router/UserRouter";

const app = express();

app.use(bodyParser.json(), routes);

export { app };
