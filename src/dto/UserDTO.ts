interface IUserResponseDTO {
    id?: string;
    cpf: string;
    name: string;
    email: string;
}

interface ISaveUserDTO {
    cpf: string;
    name: string;
    email: string;
    password: string;
    id?: string;
}

interface ILoginDTO {
    email: string;
    password: string;
}

interface IUpdateUserDTO {
    name?: string;
    email?: string;
    password?: string;
    id?: string;
    cpf?: string;
}

interface ITokenResponseDTO {
    token: string;
}

export { ITokenResponseDTO, IUpdateUserDTO, ILoginDTO, ISaveUserDTO, IUserResponseDTO };
