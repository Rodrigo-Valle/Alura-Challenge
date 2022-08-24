import { DeleteResult } from "typeorm";
import { IIncomeResponseDTO, ISaveIncomeDTO, IUpdateIncomeDTO } from "../../dto/IncomeDTO";

export interface IIncomeService {
    createIncome(createIncomeData: ISaveIncomeDTO, userId: string): Promise<IIncomeResponseDTO>;
    updateIncome(id: string, updateIncomeData: IUpdateIncomeDTO, userId: string): Promise<IIncomeResponseDTO>;
    deleteIncome(id: string, userId: string): Promise<DeleteResult>;
    getIncome(id: string, userId: string): Promise<IIncomeResponseDTO>;
    getIncomes(userId: string, description?: string): Promise<IIncomeResponseDTO[]>;
    getIncomesByDate(userId: string, year: number, month: number): Promise<IIncomeResponseDTO[]>;
}
