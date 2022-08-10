import { AppDataSource } from "../datasource";
import { ICreateUserDTO } from "../dto/UserDTO";
import { User } from "../entity";
import { IUserRepository } from "./interface/IUserRepository";


export class UserRepository implements IUserRepository {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async save(user: ICreateUserDTO): Promise<User> {
        return this.userRepository.save(user);
    }

    getUser(userId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateUser(user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteUser(userId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}