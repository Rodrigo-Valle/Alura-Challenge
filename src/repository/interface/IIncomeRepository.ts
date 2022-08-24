import { DeleteResult } from "typeorm";
import { ISaveIncomeDTO } from "../../dto/IncomeDTO";
import { Income } from "../../entity";

export interface IIncomeRepository {
    saveIncome(Income: ISaveIncomeDTO): Promise<Income>;
    deleteIncome(id: string, userId: string): Promise<DeleteResult>;
    getIncomeById(id: string, userId: string): Promise<Income | null>;
    getIncomesById(id: string, description: string): Promise<Income[] | null>;
    getIncomesByDate(id: string, year: number, month: number): Promise<Income[] | null>;
}
