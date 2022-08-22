import { DeleteResult } from "typeorm";
import {
    IIncomeResponseDTO,
    ISaveIncomeDTO,
    IUpdateIncomeDTO,
} from "../../dto/IncomeDTO";

export interface IIncomeService {
    createIncome(
        createIncomeData: ISaveIncomeDTO,
        userId: string
    ): Promise<IIncomeResponseDTO>;
    getIncomes(userId: string): Promise<IIncomeResponseDTO[]>;
    getIncome(id: string, userId: string): Promise<IIncomeResponseDTO>;
    updateIncome(
        id: string,
        updateIncomeData: IUpdateIncomeDTO,
        userId: string
    ): Promise<IIncomeResponseDTO>;
    deleteIncome(id: string, userId: string): Promise<DeleteResult>;
}
