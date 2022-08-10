import {Request, NextFunction } from "express";
import Joi, { Schema } from "joi";

export const validateBody = async (req: Request, next: NextFunction, schema: Schema): Promise<void | any> => {
    try {
        Joi.assert(req.body, schema, {abortEarly: false});
        return next();
    } catch (error) {
        if(Joi.isError(error)) {
            const { details } = error;
            const message = details.map((i: any) => i.message);
            throw {status: {code: 422, message}};
        }
    }
}