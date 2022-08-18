import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateIncomeInput:
 *      type: object
 *      required:
 *        - description
 *        - value
 *        - date
 *      properties:
 *        description:
 *          type: string
 *          default: descricao
 *        value:
 *          type: number
 *          default: 1000.00
 *        date:
 *          type: string
 *          format: date
 *          default: YYYY-MM-DD
 *    GetIncomesResponse:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: true
 *        status:
 *          type: number
 *          default: 201
 *        message:
 *          type: string
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              description:
 *                type: string
 *              value:
 *                type: number
 *              date:
 *                type: string
 *                format: date
 *    CreateIncomeResponse:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: true
 *        status:
 *          type: number
 *          default: 201
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *            description:
 *              type: string
 *            value:
 *              type: number
 *            date:
 *              type: string
 *              format: date
 */

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
