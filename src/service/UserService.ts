import { User } from "../entity";
import { IUserRepository } from "../interface/repository/IUserRepository";
import { IUserService } from "../interface/service/IUserService";
import { UserRepository } from "../repository/UserRepository";

// interface IUsuario {
//     cpf: string,
//     nome: string,
//     email: string,
//     senha: string,
// }

export class UserService implements IUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async create({cpf, nome, email, senha}: any): Promise<any> {
        const user = new User(undefined, cpf, nome, email, senha);

        const response = this.userRepository.save(user);

        return response;
    }
}