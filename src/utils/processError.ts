import { Response } from "express";

export const ProcessError = (res: Response, error: any) => {
    const statusCode = error.status ? error.status: 500;
    let status = null;
    if(error.status) {
        status = {
            code: error.status,
            message: error.message
        };
    }

    return res.status(statusCode).send({status})
}