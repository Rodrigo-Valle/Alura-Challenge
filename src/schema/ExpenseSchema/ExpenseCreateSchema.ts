import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";
import { ExpenseCategory } from "../../entity/enum/ExpenseCategoryEnum";

const expenseCreateSchema = joi.object({
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
    category: joi
        .string()
        .valid(...Object.values(ExpenseCategory))
        .optional()
        .messages({
            "any.only":
                "{#label} precisa ser um de: [alimentacao, saude, moradia, transporte, educacao, lazer, imprevistos, outras]",
        }),
});

export const validateCreateExpenseSchema = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response> => {
    try {
        await validateBody(req, next, expenseCreateSchema);
    } catch (error) {
        return ProcessError(res, error);
    }
};
