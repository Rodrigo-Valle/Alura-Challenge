import { ICreateUserDTO } from "../../dto/UserDTO";
import { User } from "../../entity";

export interface IUserRepository {
    save(user: ICreateUserDTO): Promise<User>;
    getUser(email: string): Promise<User | null>;
    updateUser(user: any): Promise<any>;
    deleteUser(userId: string): Promise<any>;
}
