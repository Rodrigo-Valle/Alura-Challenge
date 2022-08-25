import { DeleteResult } from "typeorm";
import { ISaveUserDTO } from "../../dto/UserDTO";
import { User } from "../../entity";

export interface IUserRepository {
    saveUser(user: ISaveUserDTO): Promise<User>;
    deleteUser(id: string): Promise<DeleteResult>;
    getUserById(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}
