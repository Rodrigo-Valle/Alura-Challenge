export interface IUserResponseDTO {
    id?: string;
    cpf: string;
    name: string;
    email: string;
}

export interface ISaveUserDTO {
    cpf: string;
    name: string;
    email: string;
    password: string;
    id?: string;
}

export interface ILoginDTO {
    email: string;
    password: string;
}

export interface IUpdateUserDTO {
    name?: string;
    email?: string;
    password?: string;
    id?: string;
    cpf?: string;
}
