import { DeleteResult } from "typeorm";
import { ISaveIncomeDTO } from "../../dto/IncomeDTO";
import { Income } from "../../entity";

export interface IIncomeRepository {
    saveIncome(Income: ISaveIncomeDTO): Promise<Income>;
    getIncomesById(id: string): Promise<Income[] | null>;
    getIncomeById(id: string, userId: string): Promise<Income | null>;
    deleteIncome(id: string, userId: string): Promise<DeleteResult>;
}
