import { ILoginDTO, ISaveUserDTO, IUpdateUserDTO, IUserResponseDTO } from "../../../src/dto/UserDTO";
import { User } from "../../../src/entity";


const createUserDTO: ISaveUserDTO = {
    cpf: "11122233344",
    email: "test@test.com",
    name: "test",
    password: "test"
}

const updateUserDTO: IUpdateUserDTO = {
    cpf: "11122233344",
    email: "test@test.com",
    name: "test",
    password: "test"
}

const returnUserDTO: User = {
    id: "1",
    cpf: "11122233344",
    email: "test@test.com",
    name: "test",
    password: "test"
}

const userResponseDTO: IUserResponseDTO = {
    id: "1",
    email: "test@test.com",
    name: "test",
    cpf: "11122233344"
}

export {createUserDTO, returnUserDTO, userResponseDTO, updateUserDTO};




