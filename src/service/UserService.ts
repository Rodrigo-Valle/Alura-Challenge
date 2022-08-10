import { ICreateUserDTO, IUserResponseDTO } from "../dto/UserDTO";
import { IUserRepository } from "../repository/interface/IUserRepository";
import { IUserService } from "./interface/IUserService";

export class UserService implements IUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async create({cpf, name, email, password}: ICreateUserDTO): Promise<IUserResponseDTO> {
        const userCreated = await this.userRepository.save({cpf, name, email, password});

        const reponse: IUserResponseDTO = {
            id: userCreated.id,
            name: userCreated.name,
            email: userCreated.email
        }

        return reponse;
    }


    login(email: string, password: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getUser(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateUser(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteUser(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }


}