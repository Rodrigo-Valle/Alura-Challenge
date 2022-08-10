import { Response } from "express";
import { IResponse } from "../interface/IResponse";

export const ProcessError = (res: Response, error: any) => {
    const statusCode = error.status ? error.status : 500;
    let response: IResponse = {
        ok: false,
        status: error.status,
        message: error.message,
        detail: error.detail,
    };

    return res.status(statusCode).json(response);
};
