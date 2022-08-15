import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: email@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    LoginUserResponse:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: true
 *        status:
 *          type: number
 *          default: 200
 *        message:
 *          type: string
 *        data: 
 *          type: object
 *          properties:
 *            token:
 *              type: string
 */

const userLoginSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Informe um e-mail válido",
        "any.required": "Campo email é obrigatório",
    }),
    password: joi
        .string()
        .required()
        .pattern(new RegExp(/^\d{8}$/))
        .messages({
            "any.required": "Campo senha é obrigatório",
            "string.pattern.base": "A senha deve possuir 8 numeros",
        }),
});

export const validateLoginUserSchema = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response> => {
    try {
        await validateBody(req, next, userLoginSchema);
    } catch (error) {
        return ProcessError(res, error);
    }
};
