import { DeleteResult } from "typeorm";
import { ISaveUserDTO } from "../../../src/dto/UserDTO";
import { User } from "../../../src/entity";
import { IUserRepository } from "../../../src/repository/interface/IUserRepository";
import { returnUserDTO } from "../dto/UserMocks";


export class UserRepositoryMock implements IUserRepository {
    public async save(_user: ISaveUserDTO): Promise<User> {
        return returnUserDTO;
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        if (email !== "test@test.com") return null
        
        return returnUserDTO;
    }

    public async getUserById(id: string): Promise<User | null> {
        if (id !== "1") return null
        
        return returnUserDTO; 
    }

    public async deleteUser(id: string): Promise<DeleteResult> {
        const deleteResult = ({} as unknown) as DeleteResult;
        if (id !== "1") {
            deleteResult.affected = 0;
            return deleteResult
        }

        deleteResult.affected = 1;
        return deleteResult

    }
    
}