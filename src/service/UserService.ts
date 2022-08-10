import { ICreateUserDTO, ILoginDTO, IUserResponseDTO } from "../dto/UserDTO";
import { IUserRepository } from "../repository/interface/IUserRepository";
import { IUserService } from "./interface/IUserService";
import bcryptjs from "bcryptjs";
import { ITokenService } from "./interface/ITokenService";
import { v4 as uuid } from "uuid";
import { NotFoundError } from "../utils/exceptions/NotFoundError";
import { UnauthorizedError } from "../utils/exceptions/UnauthorizedError";

export class UserService implements IUserService {
    private userRepository: IUserRepository;
    private readonly tokenService: ITokenService;

    constructor(userRepository: IUserRepository, tokenService: ITokenService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }

    public async create(createUserData: ICreateUserDTO): Promise<IUserResponseDTO> {
        createUserData.password = await bcryptjs.hash(createUserData.password, 8);
        createUserData.id = uuid();
        const userCreated = await this.userRepository.save(createUserData);

        const reponse: IUserResponseDTO = {
            id: userCreated.id,
            name: userCreated.name,
            email: userCreated.email,
        };

        return reponse;
    }

    public async login({ email, password }: ILoginDTO): Promise<string> {
        const user = await this.userRepository.getUser(email);
        if (!user) {
            throw new UnauthorizedError("Email e/ou senha incorretos, tente novamente", "Acesso negado");
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedError("Email e/ou senha incorretos, tente novamente", "Acesso negado");
        }

        return this.tokenService.generateAuthToken(user.id);
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
