import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";
import { ExpenseCategory } from "../../entity/enum/ExpenseCategoryEnum";

const expenseUpdateSchema = joi.object({
    id: joi.any().forbidden(),
    description: joi.string().optional(),
    value: joi.number().optional(),
    date: joi.date().optional(),
    category: joi
        .string()
        .valid(...Object.values(ExpenseCategory))
        .optional()
        .messages({
            "any.only":
                "{#label} precisa ser um de: [alimentacao, saude, moradia, transporte, educacao, lazer, imprevistos, outras]",
        }),
});

export const validateUpdateExpenseSchema = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response> => {
    try {
        await validateBody(req, next, expenseUpdateSchema);
    } catch (error) {
        return ProcessError(res, error);
    }
};
