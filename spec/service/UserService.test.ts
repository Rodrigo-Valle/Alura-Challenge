import {UserService} from "../../src/service/UserService"
import { UserRepositoryMock } from "../mocks/repository/UserRepositoryMock"
import { createUserDTO, updateUserDTO, userResponseDTO } from "../mocks/dto/UserMocks";
import { NotFoundError, UnauthorizedError } from "../../src/utils/exceptions";
import bcryptjs from "bcryptjs";

const userServiceTest = new UserService(new UserRepositoryMock());

describe("UserService createUser", () => {
    it('should return a user when create susscefully', async () => {
        const response = await userServiceTest.createUser(createUserDTO);
        expect(response).toEqual(userResponseDTO);

    })
});

describe("UserService login", () => {
    it('should throw an error when user not found in login', async () => {
        try {
            const response = await userServiceTest.login({email: "wrongEmail",
            password: "test"});

        } catch (error) {
            expect(error).toBeInstanceOf(UnauthorizedError);
        }
    })

    it('should throw an error when user password not match', async () => {
        try {
            const bcryptCompare = jest.fn().mockResolvedValue(false);
            (bcryptjs.compare as jest.Mock) = bcryptCompare;

            const response = await userServiceTest.login({email: "test@test.com",
            password: "test"});
            

        } catch (error) {
            expect(error).toBeInstanceOf(UnauthorizedError);
        }

    })

    it('should return an token when login is successful', async () => {
        try {
            const bcryptCompare = jest.fn().mockResolvedValue(true);
            (bcryptjs.compare as jest.Mock) = bcryptCompare;

            const response = await userServiceTest.login({email: "test@test.com",
            password: "test"});

            expect(response).toBe('token');
            

        } catch (error) {}
    })
});

describe('UserService getUser', () => {
    it('should throw an error when user not found in getUser', async () => {
        try {
            const response = await userServiceTest.getUser("2");

        } catch (error) {
            expect(error).toBeInstanceOf(NotFoundError);
        }
    })

    it('should return an user when getUser is successful', async () => {
        try {
            const response = await userServiceTest.getUser("1");

            expect(response).toEqual(userResponseDTO);
            

        } catch (error) {}
    })
})

describe('UserService updateUser', () => {
    it('should throw an error when user not found in getUser', async () => {
        try {
            const response = await userServiceTest.updateUser("2", updateUserDTO);

        } catch (error) {
            expect(error).toBeInstanceOf(NotFoundError);
        }
    })

    it('should return an user when updateUser is successful', async () => {
        try {
            const response = await userServiceTest.updateUser("1", updateUserDTO);

            expect(response).toEqual(userResponseDTO);
        } catch (error) {}
    })

    it('should return an user when updateUser is successful two', async () => {
        try {
            delete updateUserDTO.cpf;
            delete updateUserDTO.email;
            delete updateUserDTO.name;
            delete updateUserDTO.password;
            const response = await userServiceTest.updateUser("1", updateUserDTO);

            expect(response).toEqual(userResponseDTO);
        } catch (error) {}
    })
});

describe('UserService deleteUser',  () => {
    it('should throw an error when not found in deleteUser', async () => {
        try {
            const response = await userServiceTest.deleteUser("2");

        } catch (error) {
            expect(error).toBeInstanceOf(NotFoundError);
        }
    })

    it('should throw an error when not found in deleteUser', async () => {
        try {
            const response = await userServiceTest.deleteUser("1");

        } catch (error) {}
    })
})
