import { AppDataSource } from "../datasource";
import { User } from "../entity";
import { IUserRepository } from "../interface/repository/IUserRepository";

interface IUsuario {
    cpf: string,
    nome: string,
    email: string,
    senha: string,
}

export class UserRepository implements IUserRepository {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async save(user : IUsuario) {
        console.log("repository")
        const responseUser = await this.userRepository.save(user);

        return responseUser;
    }
}