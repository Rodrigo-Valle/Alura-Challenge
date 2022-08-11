import { ICreateUserDTO } from "../../dto/UserDTO";
import { User } from "../../entity";

export interface IUserRepository {
    save(user: ICreateUserDTO): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
    getUserById(id: string): Promise<User | null>;
    updateUser(user: any): Promise<any>;
    deleteUser(userId: string): Promise<any>;
}
