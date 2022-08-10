import * as jwt from "jsonwebtoken";
import { ITokenService } from "./interface/ITokenService";

export class TokenService implements ITokenService {
    public async generateAuthToken(id: string): Promise<string> {
        return jwt.sign({ id: id }, process.env.JWT_SECRET || "", { expiresIn: process.env.JWT_EXPIRES || 1 });
    }
}
