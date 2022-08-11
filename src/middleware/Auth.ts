import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { UnauthorizedError } from "../utils/exceptions";
import { ProcessError } from "../utils/processError";

interface UserPayload {
    id: string;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.get("Authorization")?.replace("Bearer ", "");
        if (!token) throw new UnauthorizedError("Não informado token de autenticação", "Acesso negado");

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as UserPayload;
        req.id = decoded.id;
        next();
    } catch (error) {
        return ProcessError(res, error);
    }
};
