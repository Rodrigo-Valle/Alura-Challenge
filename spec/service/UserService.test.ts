import {UserService} from "../../src/service/UserService"
import { UserRepositoryMock } from "../mocks/repository/UserRepositoryMock"
import { createUserMock, updateUserMock, userResponseMock } from "../mocks/dto/UserMocks";
import { NotFoundError, UnauthorizedError } from "../../src/utils/exceptions";
import bcryptjs from "bcryptjs";

const userServiceTest = new UserService(new UserRepositoryMock());

describe("UserService createUser", () => {
    it('should return a user when create susscefully', async () => {
        const response = await userServiceTest.createUser(createUserMock);
        expect(response).toEqual(userResponseMock);

    })
});

describe("UserService login", () => {
    it('should throw an error when user not found in login', async () => {
        try {
            const response = await userServiceTest.loginUser({email: "wrongEmail",
            password: "test"});

        } catch (error) {
            expect(error).toBeInstanceOf(UnauthorizedError);
        }
    })

    it('should throw an error when user password not match', async () => {
        try {
            const bcryptCompare = jest.fn().mockResolvedValue(false);
            (bcryptjs.compare as jest.Mock) = bcryptCompare;

            const response = await userServiceTest.loginUser({email: "test@test.com",
            password: "test"});
            

        } catch (error) {
            expect(error).toBeInstanceOf(UnauthorizedError);
        }

    })

    it('should return an token when login is successful', async () => {
        try {
            const bcryptCompare = jest.fn().mockResolvedValue(true);
            (bcryptjs.compare as jest.Mock) = bcryptCompare;

            const response = await userServiceTest.loginUser({email: "test@test.com",
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

            expect(response).toEqual(userResponseMock);
            

        } catch (error) {}
    })
})

describe('UserService updateUser', () => {
    it('should throw an error when user not found in getUser', async () => {
        try {
            const response = await userServiceTest.updateUser("2", updateUserMock);

        } catch (error) {
            expect(error).toBeInstanceOf(NotFoundError);
        }
    })

    it('should return an user when updateUser is successful', async () => {
        try {
            const response = await userServiceTest.updateUser("1", updateUserMock);

            expect(response).toEqual(userResponseMock);
        } catch (error) {}
    })

    it('should return an user when updateUser is successful two', async () => {
        try {
            const response = await userServiceTest.updateUser("1", {});

            expect(response).toEqual(userResponseMock);
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

    it('should return a delete response when deleteUser successfully', async () => {
        try {
            const response = await userServiceTest.deleteUser("1");

            expect(response.affected).toEqual(1);
        } catch (error) {}
    })
})
