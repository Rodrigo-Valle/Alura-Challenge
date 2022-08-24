import { Request, NextFunction } from "express";
import Joi, { Schema } from "joi";
import { ValidationError } from "./exceptions";

export const validateBody = async (req: Request, next: NextFunction, schema: Schema): Promise<void | any> => {
    try {
        if (Object.keys(req.body).length === 0) throw new Error("Corpo é obrigatório");

        Joi.assert(req.body, schema, { abortEarly: false });
        return next();
    } catch (error: any) {
        if (Joi.isError(error)) {
            const { details } = error;
            const detail = details.map((i: any) => i.message);
            throw new ValidationError(detail);
        }
        throw new ValidationError(error.message);
    }
};
