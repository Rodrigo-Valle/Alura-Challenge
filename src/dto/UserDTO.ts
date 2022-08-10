
export interface ICreateUserDTO {
    cpf: string;
    name: string;
    email: string;
    password: string;
}

export interface IUserResponseDTO {
    id?: number;
    name: string;
    email: string;
}