import { Response } from "express";
import { IResponse } from "../interface/IResponse";
import logger from "./logger";

export const ProcessError = (res: Response, error: any) => {
    logger.error(`[Api Error] url: ${res.req?.url}, method: ${res.req?.method},
     message: ${error.message}, details: ${error.detail}, status: ${error.status}`);

    const statusCode = error.status ? error.status : 500;
    let response: IResponse = {
        ok: false,
        status: error.status,
        message: error.message,
        detail: error.detail,
    };

    return res.status(statusCode).json(response);
};
