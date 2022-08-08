import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
// import { router } from "./Router/routes";
// import cors from 'cors'

const app = express();

// app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send("App rodando");
})


// app.use(router);

export { app }