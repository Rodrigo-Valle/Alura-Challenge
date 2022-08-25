import { DeleteResult } from "typeorm";
import { ILoginDTO, ISaveUserDTO, ITokenResponseDTO, IUpdateUserDTO, IUserResponseDTO } from "../../dto/UserDTO";

export interface IUserService {
    createUser(createUserData: ISaveUserDTO): Promise<IUserResponseDTO>;
    loginUser(loginUserData: ILoginDTO): Promise<ITokenResponseDTO>;
    updateUser(id: string, updateUserData: IUpdateUserDTO): Promise<IUserResponseDTO>;
    deleteUser(id: string): Promise<DeleteResult>;
    getUser(id: string): Promise<IUserResponseDTO>;
}
