import { ICreateUserDTO, IUserResponseDTO } from "../../dto/UserDTO";

export interface IUserService {
    create({cpf, name, email, password}: ICreateUserDTO): Promise<IUserResponseDTO>;
    login(email: string, password: string): Promise<any>;
    getUser(email: string): Promise<any>;
    updateUser(email: string): Promise<any>;
    deleteUser(email: string): Promise<any>;
}