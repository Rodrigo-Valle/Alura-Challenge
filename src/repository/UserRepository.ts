import { AppDataSource } from "../datasource";
import { ICreateUserDTO } from "../dto/UserDTO";
import { User } from "../entity";
import { IUserRepository } from "./interface/IUserRepository";

export class UserRepository implements IUserRepository {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    public save(user: ICreateUserDTO): Promise<User> {
        return this.userRepository.save(user);
    }

    public getUser(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({ email: email });
    }
    updateUser(user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteUser(userId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
