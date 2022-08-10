export interface ICreateUserDTO {
    cpf: string;
    name: string;
    email: string;
    password: string;
    id?: string;
}

export interface IUserResponseDTO {
    id?: string;
    name: string;
    email: string;
}

export interface ILoginDTO {
    email: string;
    password: string;
}
