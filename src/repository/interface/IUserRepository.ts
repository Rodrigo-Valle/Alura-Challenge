import { ISaveUserDTO } from "../../dto/UserDTO";
import { User } from "../../entity";

export interface IUserRepository {
    save(user: ISaveUserDTO): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
    getUserById(id: string): Promise<User | null>;
    deleteUser(userId: string): Promise<any>;
}
