import { ILoginDTO, ISaveUserDTO, IUpdateUserDTO, IUserResponseDTO } from "../../dto/UserDTO";

export interface IUserService {
    create(createUserData: ISaveUserDTO): Promise<IUserResponseDTO>;
    login(loginUserData: ILoginDTO): Promise<string>;
    getUser(email: string): Promise<IUserResponseDTO>;
    updateUser(id: string, updateUserData: IUpdateUserDTO): Promise<IUserResponseDTO>;
    deleteUser(email: string): Promise<any>;
}
