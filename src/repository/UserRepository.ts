import { DeleteResult } from "typeorm";
import { AppDataSource } from "../datasource";
import { ISaveUserDTO } from "../dto/UserDTO";
import { User } from "../entity";
import { DataBaseError } from "../utils/exceptions";
import { IUserRepository } from "./interface/IUserRepository";

export class UserRepository implements IUserRepository {
    private readonly userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    public async saveUser(user: ISaveUserDTO): Promise<User> {
        try {
            return await this.userRepository.save(user);
        } catch (error: any) {
            throw new DataBaseError("Erro ao salvar usuário", error, error.code);
        }
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        try {
            return await this.userRepository.findOneBy({ email: email });
        } catch (error: any) {
            throw new DataBaseError("Erro ao buscar usuário", error, error.code);
        }
    }

    public async getUserById(id: string): Promise<User | null> {
        try {
            return await this.userRepository.findOneBy({ id: id });
        } catch (error: any) {
            throw new DataBaseError("Erro ao buscar usuário", error, error.code);
        }
    }

    public async deleteUser(id: string): Promise<DeleteResult> {
        try {
            return await this.userRepository.delete({ id: id });
        } catch (error: any) {
            throw new DataBaseError("Erro ao deletar usuário", error, error.code);
        }
    }
}
