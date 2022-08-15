import { DeleteResult } from "typeorm";
import { ISaveUserDTO } from "../../dto/UserDTO";
import { User } from "../../entity";

export interface IUserRepository {
    saveUser(user: ISaveUserDTO): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
    getUserById(id: string): Promise<User | null>;
    deleteUser(id: string): Promise<DeleteResult>;
}
