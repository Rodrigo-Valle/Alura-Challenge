import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";

const incomeCreateSchema = joi.object({
    id: joi.any().forbidden(),
    description: joi.string().required().messages({
        "any.required": "Campo description é obrigatório",
    }),
    value: joi.number().required().messages({
        "any.required": "Campo value é obrigatório",
    }),
    date: joi.date().required().messages({
        "any.required": "Campo date é obrigatório",
    }),
});

export const validateCreateIncomeSchema = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response> => {
    try {
        await validateBody(req, next, incomeCreateSchema);
    } catch (error) {
        return ProcessError(res, error);
    }
};
