import { DeleteResult } from "typeorm";
import { ISaveUserDTO, IUserResponseDTO, ILoginDTO, IUpdateUserDTO } from "../../../src/dto/UserDTO";
import { IUserService } from "../../../src/service/interface/IUserService";
import { userResponseDTO } from "../dto/UserMocks";


export class UserServiceMock implements IUserService {
    public async createUser(_createUserData: ISaveUserDTO): Promise<IUserResponseDTO> {
        return userResponseDTO;
    }
    public async login(_loginUserData: ILoginDTO): Promise<string> {
        return "token";
    }

    public async getUser(_id: string): Promise<IUserResponseDTO> {
        return userResponseDTO;
    }

    public async updateUser(_id: string, _updateUserData: IUpdateUserDTO): Promise<IUserResponseDTO> {
        return userResponseDTO;
    }
    public async deleteUser(_id: string): Promise<DeleteResult> {
        const response: DeleteResult = {
            raw: {
                success: true,
            },
            affected: 1
        };
        return response;
    };
    
};