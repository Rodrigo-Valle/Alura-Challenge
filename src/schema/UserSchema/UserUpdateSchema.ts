import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";

const userCreateSchema = joi
    .object({
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
    })
    .required()
    .messages({
        "object.required": "Corpo é obrigatório",
        "object.unknown": "Campo {#label} não é permitido",
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
