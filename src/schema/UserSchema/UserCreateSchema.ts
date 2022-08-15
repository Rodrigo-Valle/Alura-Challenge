import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";

/**
 * @openapi
 * components:
 *  schemas:
 *    SiginUserInput:
 *      type: object
 *      required:
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
 *    SiginUserResponse:
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
 *            cpf:
 *              type: string
 *            name:
 *              type: string
 *            email:
 *              type: string
 */

const userCreateSchema = joi.object({
    id: joi.any().forbidden(),
    cpf: joi.string().length(11).required().pattern(new RegExp(/\d/)).messages({
        "any.required": "Campo Cpf é obrigatório",
        "string.length": "CPF é composto por 11 numeros",
        "string.pattern.base": "CPF é composto por 11 numeros",
    }),
    name: joi.string().min(3).max(30).required().messages({
        "string.min": "Name deve possuir ao menos 3 caracteres",
        "string.max": "Name deve possuir no maximo 30 caracteres",
        "any.required": "Campo name é obrigatório",
    }),
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

export const validateCreateUserSchema = async (
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
