import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateUserInput:
 *      type: object
 *      optional:
 *        - email
 *        - password
 *        - name
 *        - cpf
 *      properties:
 *        email:
 *          type: string
 *          default: email@example.com
 *        password:
 *          type: string
 *          default: 12345678
 *        name:
 *          type: string
 *          default: Nome
 *        cpf:
 *          type: string
 *          default: 11122233344
 */

const userCreateSchema = joi.object({
    id: joi.any().forbidden(),
    cpf: joi.any().forbidden(),
    name: joi.string().min(3).max(30).optional().messages({
        "string.min": "Name deve possuir ao menos 3 caracteres",
        "string.max": "Name deve possuir no maximo 30 caracteres",
    }),
    email: joi.string().email().optional().messages({
        "string.email": "Informe um e-mail válido",
    }),
    password: joi
        .string()
        .pattern(new RegExp(/^\d{8}$/))
        .messages({
            "string.pattern.base": "A senha deve possuir 8 numeros",
        }),
});

export const validateUpdateUserSchema = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response> => {
    try {
        await validateBody(req, next, userCreateSchema);
    } catch (error) {
        return ProcessError(res, error);
    }
};
