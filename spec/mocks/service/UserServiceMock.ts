import { DeleteResult } from "typeorm";
import { ISaveUserDTO, IUserResponseDTO, ILoginDTO, IUpdateUserDTO, ITokenResponseDTO } from "../../../src/dto/UserDTO";
import { IUserService } from "../../../src/service/interface/IUserService";
import { tokenResponseMock, userResponseMock } from "../dto/UserMocks";


export class UserServiceMock implements IUserService {
    public async createUser(_createUserData: ISaveUserDTO): Promise<IUserResponseDTO> {
        return userResponseMock;
    }
    public async loginUser(_loginUserData: ILoginDTO): Promise<ITokenResponseDTO> {
        return tokenResponseMock
    }

    public async getUser(_id: string): Promise<IUserResponseDTO> {
        return userResponseMock;
    }

    public async updateUser(_id: string, _updateUserData: IUpdateUserDTO): Promise<IUserResponseDTO> {
        return userResponseMock;
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