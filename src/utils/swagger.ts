import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import logger from "./logger";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Controle Orcamento API Documentation",
            version: "1.0.0",
            description: "Api desenvolvida para o AluraChallenge",
            contact: {
                name: "Repositório:",
                url: "https://github.com/Rodrigo-Valle/Alura-Challenge",
            },
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    in: "header",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["./src/router/**.ts", "./src/schema/swaggerSchema/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swagger(app: Express, port: string) {
    // Swagger Page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    //Docs in JSON  format
    app.get("docs.json", (_req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    logger.info(`[Startup - Swagger] Docs Avaiable in: http://localhost:${port}/docs`);
}

export default swagger;
