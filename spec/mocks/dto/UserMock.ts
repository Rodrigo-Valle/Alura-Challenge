import {
    ISaveUserDTO,
    ITokenResponseDTO,
    IUpdateUserDTO,
    IUserResponseDTO,
} from "../../../src/dto/UserDTO";
import { User } from "../../../src/entity";

const createUserMock: ISaveUserDTO = {
    cpf: "11122233344",
    email: "test@test.com",
    name: "test",
    password: "test",
};

const updateUserMock: IUpdateUserDTO = {
    cpf: "11122233344",
    email: "test@test.com",
    name: "test",
    password: "test",
};

const returnUserMock: User = {
    id: "1",
    cpf: "11122233344",
    email: "test@test.com",
    name: "test",
    password: "test",
};

const userResponseMock: IUserResponseDTO = {
    id: "1",
    email: "test@test.com",
    name: "test",
    cpf: "11122233344",
};

const tokenResponseMock: ITokenResponseDTO = {
    token: "token",
};

export {
    tokenResponseMock,
    userResponseMock,
    returnUserMock,
    updateUserMock,
    createUserMock,
};
