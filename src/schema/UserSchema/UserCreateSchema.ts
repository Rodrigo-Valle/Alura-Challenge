import * as joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validateBody } from "../../utils/schemaValidator";
import { ProcessError } from "../../utils/processError";

const userCreateSchema = joi
    .object({
        cpf: joi.string().length(11).required().pattern(new RegExp(/\d/)).messages({
            "any.required": "Campo cpf é obrigatório",
            "string.length": "Campo cpf é composto por 11 numeros",
            "string.pattern.base": "campo cpf é composto somente por numeros",
        }),
        name: joi.string().min(3).max(30).required().messages({
            "string.min": "Campo name deve possuir ao menos 3 caracteres",
            "string.max": "Campo name deve possuir no maximo 30 caracteres",
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
                "string.pattern.base": "A senha é composta somente por números e deve possuir 8 numeros",
            }),
    })
    .messages({
        "object.unknown": "Campo {#label} não é permitido",
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
