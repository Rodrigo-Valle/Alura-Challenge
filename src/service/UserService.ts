import { ILoginDTO, ISaveUserDTO, IUpdateUserDTO, IUserResponseDTO } from "../dto/UserDTO";
import { IUserRepository } from "../repository/interface/IUserRepository";
import { IUserService } from "./interface/IUserService";
import bcryptjs from "bcryptjs";
import { ITokenService } from "./interface/ITokenService";
import { v4 as uuid } from "uuid";
import { NotFoundError, UnauthorizedError } from "../utils/exceptions";

export class UserService implements IUserService {
    private readonly userRepository: IUserRepository;
    private readonly tokenService: ITokenService;

    constructor(userRepository: IUserRepository, tokenService: ITokenService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }

    public async create(createUserData: ISaveUserDTO): Promise<IUserResponseDTO> {
        createUserData.password = await bcryptjs.hash(createUserData.password, 8);
        createUserData.id = uuid();
        const result = await this.userRepository.save(createUserData);

        const reponse: IUserResponseDTO = {
            id: result.id,
            cpf: result.cpf,
            name: result.name,
            email: result.email,
        };

        return reponse;
    }

    public async login({ email, password }: ILoginDTO): Promise<string> {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) {
            throw new UnauthorizedError("Email e/ou senha incorretos, tente novamente", "Acesso negado");
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedError("Email e/ou senha incorretos, tente novamente", "Acesso negado");
        }

        return this.tokenService.generateAuthToken(user.id);
    }

    public async getUser(id: string): Promise<IUserResponseDTO> {
        const result = await this.userRepository.getUserById(id);

        if (!result) throw new NotFoundError("Usuário não encontrado", "Objeto não localizado");

        const response: IUserResponseDTO = {
            id: result.id,
            cpf: result.cpf,
            name: result.name,
            email: result.email,
        };

        return response;
    }

    public async updateUser(id: string, updateUserData: IUpdateUserDTO): Promise<IUserResponseDTO> {
        const user = await this.userRepository.getUserById(id);

        if (!user) throw new NotFoundError("Usuário não encontrado", "Objeto não localizado");

        const updatedUser: ISaveUserDTO = {
            name: updateUserData.name ? updateUserData.name : user.name,
            email: updateUserData.email ? updateUserData.email : user.email,
            password: updateUserData.password ? await bcryptjs.hash(updateUserData.password, 8) : user.password,
            id: user.id,
            cpf: user.cpf
        }

        const result = await this.userRepository.save(updatedUser);

        const reponse: IUserResponseDTO = {
            id: result.id,
            cpf: result.cpf,
            name: result.name,
            email: result.email,
        };

        return reponse;
    }

    deleteUser(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}    
