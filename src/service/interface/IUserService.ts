import { ICreateUserDTO, ILoginDTO, IUserResponseDTO } from "../../dto/UserDTO";

export interface IUserService {
    create(createUserData: ICreateUserDTO): Promise<IUserResponseDTO>;
    login(loginUserData: ILoginDTO): Promise<string>;
    getUser(email: string): Promise<any>;
    updateUser(email: string): Promise<any>;
    deleteUser(email: string): Promise<any>;
}
