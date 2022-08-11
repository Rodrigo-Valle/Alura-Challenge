import { AppDataSource } from "../datasource";
import { ICreateUserDTO } from "../dto/UserDTO";
import { User } from "../entity";
import { DataBaseError } from "../utils/exceptions";
import { IUserRepository } from "./interface/IUserRepository";

export class UserRepository implements IUserRepository {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    public async save(user: ICreateUserDTO): Promise<User> {
        try {
            return await this.userRepository.save(user);
        } catch (error: any) {
            throw new DataBaseError("Erro ao salvar usuário", error.message);
        }
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        try {
            return await this.userRepository.findOneBy({ email: email });

        } catch (error: any) {
            throw new DataBaseError("Erro ao buscar usuário", error.message);
        }
    }

    public async getUserById(id: string): Promise<User | null> {
        try {
            return await this.userRepository.findOneBy({id: id});
        } catch (error: any) {
            throw new DataBaseError("Erro ao buscar usuário", error.message);

        }
    }

    updateUser(user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteUser(userId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
