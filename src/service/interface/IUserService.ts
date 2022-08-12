import { DeleteResult } from "typeorm";
import { ILoginDTO, ISaveUserDTO, IUpdateUserDTO, IUserResponseDTO } from "../../dto/UserDTO";

export interface IUserService {
    createUser(createUserData: ISaveUserDTO): Promise<IUserResponseDTO>;
    login(loginUserData: ILoginDTO): Promise<string>;
    getUser(id: string): Promise<IUserResponseDTO>;
    updateUser(id: string, updateUserData: IUpdateUserDTO): Promise<IUserResponseDTO>;
    deleteUser(id: string): Promise<DeleteResult>;
}
