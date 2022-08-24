import { DeleteResult } from "typeorm";
import { ISaveUserDTO } from "../../../src/dto/UserDTO";
import { User } from "../../../src/entity";
import { IUserRepository } from "../../../src/repository/interface/IUserRepository";
import { returnUserMock } from "../dto/UserMock";

export class UserRepositoryMock implements IUserRepository {
    public async saveUser(_user: ISaveUserDTO): Promise<User> {
        return returnUserMock;
    }

    public async deleteUser(id: string): Promise<DeleteResult> {
        const deleteResult = {} as unknown as DeleteResult;
        if (id !== "1") {
            deleteResult.affected = 0;
            return deleteResult;
        }

        deleteResult.affected = 1;
        return deleteResult;
    }

    public async getUserById(id: string): Promise<User | null> {
        if (id !== "1") return null;

        return returnUserMock;
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        if (email !== "test@test.com") return null;

        return returnUserMock;
    }
}
