import {
    ILoginDTO,
    ISaveUserDTO,
    ITokenResponseDTO,
    IUpdateUserDTO,
    IUserResponseDTO,
} from "../dto/UserDTO";
import { IUserRepository } from "../repository/interface/IUserRepository";
import { IUserService } from "./interface/IUserService";
import bcryptjs from "bcryptjs";
import { v4 as uuid } from "uuid";
import { NotFoundError, UnauthorizedError } from "../utils/exceptions";
import { DeleteResult } from "typeorm";
import { generateAuthToken } from "../utils/tokenGenerator";

export class UserService implements IUserService {
    private readonly userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async createUser(createUserData: ISaveUserDTO): Promise<IUserResponseDTO> {
        createUserData.password = await bcryptjs.hash(createUserData.password, 8);
        createUserData.id = uuid();
        const result = await this.userRepository.saveUser(createUserData);

        const reponse: IUserResponseDTO = {
            id: result.id,
            cpf: result.cpf,
            name: result.name,
            email: result.email,
        };

        return reponse;
    }

    public async loginUser({ email, password }: ILoginDTO): Promise<ITokenResponseDTO> {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) {
            throw new UnauthorizedError("Email e/ou senha incorretos, tente novamente");
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedError("Email e/ou senha incorretos, tente novamente");
        }

        const token: ITokenResponseDTO = {
            token: generateAuthToken(user.id),
        };

        return token;
    }

    public async getUser(id: string): Promise<IUserResponseDTO> {
        const result = await this.userRepository.getUserById(id);

        if (!result) throw new NotFoundError("Usuário não localizado");

        const response: IUserResponseDTO = {
            id: result.id,
            cpf: result.cpf,
            name: result.name,
            email: result.email,
        };

        return response;
    }

    public async updateUser(
        id: string,
        updateUserData: IUpdateUserDTO
    ): Promise<IUserResponseDTO> {
        const user = await this.userRepository.getUserById(id);

        if (!user) throw new NotFoundError("Usuário não localizado");

        const updatedUser: ISaveUserDTO = {
            name: updateUserData.name ? updateUserData.name : user.name,
            email: updateUserData.email ? updateUserData.email : user.email,
            password: updateUserData.password
                ? await bcryptjs.hash(updateUserData.password, 8)
                : user.password,
            id: user.id,
            cpf: user.cpf,
        };

        const result = await this.userRepository.saveUser(updatedUser);

        const reponse: IUserResponseDTO = {
            id: result.id,
            cpf: result.cpf,
            name: result.name,
            email: result.email,
        };

        return reponse;
    }

    public async deleteUser(id: string): Promise<DeleteResult> {
        const result = await this.userRepository.deleteUser(id);

        if (
            result.affected === null ||
            result.affected === undefined ||
            result.affected < 1
        )
            throw new NotFoundError("Usuário não localizado");

        return result;
    }
}
