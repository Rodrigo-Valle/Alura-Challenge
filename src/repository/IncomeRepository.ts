import { DeleteResult } from "typeorm";
import { AppDataSource } from "../datasource";
import { ISaveIncomeDTO } from "../dto/IncomeDTO";
import { Income } from "../entity";
import { DataBaseError } from "../utils/exceptions";
import { IIncomeRepository } from "./interface/IIncomeRepository";

export class IncomeRepository implements IIncomeRepository {
    private readonly incomeRepository;

    constructor() {
        this.incomeRepository = AppDataSource.getRepository(Income);
    }

    public async saveIncome(income: ISaveIncomeDTO): Promise<Income> {
        try {
            return await this.incomeRepository.save(income);
        } catch (error: any) {
            throw new DataBaseError("Erro ao salvar receita", error, error.code);
        }
    }
    getIncomesById(id: string): Promise<Income[] | null> {
        throw new Error("Method not implemented.");
    }
    getIncomeById(id: string): Promise<Income | null> {
        throw new Error("Method not implemented.");
    }
    deleteIncome(id: string): Promise<DeleteResult> {
        throw new Error("Method not implemented.");
    }

}