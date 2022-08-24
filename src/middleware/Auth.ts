import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { UnauthorizedError } from "../utils/exceptions";
import { ProcessError } from "../utils/processError";

interface UserPayload {
    id: string;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.get("Authorization");
        if (token === undefined) throw new UnauthorizedError("Não informado token de autenticação");

        const formattedToken = token.replace("Bearer ", "");
        const decoded = jwt.verify(formattedToken, process.env.JWT_SECRET || "") as UserPayload;
        req.id = decoded.id;
        next();
    } catch (error) {
        return ProcessError(res, error);
    }
};
