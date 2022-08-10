import { User } from "../../entity";

export interface ITokenService {
    generateAuthToken(userId: string): Promise<string>;
}
