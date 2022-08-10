import { Request, NextFunction } from "express";
import Joi, { Schema } from "joi";
import { ValidationError } from "./exceptions/Validationerror";

export const validateBody = async (req: Request, next: NextFunction, schema: Schema): Promise<void | any> => {
    try {
        Joi.assert(req.body, schema, { abortEarly: false });
        return next();
    } catch (error) {
        if (Joi.isError(error)) {
            const { details } = error;
            const detail = details.map((i: any) => i.message);
            throw new ValidationError(detail, "Erro de validação na entrada de dados");
        }
    }
};
