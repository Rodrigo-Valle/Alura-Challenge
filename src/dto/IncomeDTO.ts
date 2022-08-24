import { User } from "../entity";

interface IIncomeResponseDTO {
    id: string;
    description: string;
    value: number;
    date: Date;
}

interface ISaveIncomeDTO {
    description: string;
    value: number;
    date: Date;
    user?: User;
    id?: string;
}

interface IUpdateIncomeDTO {
    description?: string;
    value?: number;
    date?: Date;
}

export { ISaveIncomeDTO, IIncomeResponseDTO, IUpdateIncomeDTO };
