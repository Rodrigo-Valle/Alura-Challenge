import { DeleteResult, Like, Between } from "typeorm";
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

    public async deleteIncome(id: string, userId: string): Promise<DeleteResult> {
        try {
            return await this.incomeRepository
                .createQueryBuilder()
                .delete()
                .from("Income")
                .where("id = :incomeId", { incomeId: id })
                .andWhere("userId = :userId", { userId: userId })
                .execute();
        } catch (error: any) {
            throw new DataBaseError("Erro ao deletar receita", error, error.code);
        }
    }

    public async getIncomeById(id: string, userId: string): Promise<Income | null> {
        try {
            return await this.incomeRepository.findOne({
                select: {
                    id: true,
                    description: true,
                    value: true,
                    date: true,
                },
                where: {
                    id: id,
                    user: {
                        id: userId,
                    },
                },
            });
        } catch (error: any) {
            throw new DataBaseError("Erro ao salvar receita", error, error.code);
        }
    }

    public async getIncomesById(id: string, description: string): Promise<Income[] | null> {
        try {
            return await this.incomeRepository.find({
                select: {
                    id: true,
                    description: true,
                    value: true,
                    date: true,
                },
                where: {
                    user: {
                        id: id,
                    },
                    description: Like(`%${description}%`),
                },
            });
        } catch (error: any) {
            throw new DataBaseError("Erro ao buscar receita", error, error.code);
        }
    }

    public async getIncomesByDate(id: string, year: number, month: number): Promise<Income[] | null> {
        try {
            return await this.incomeRepository.find({
                select: {
                    id: true,
                    description: true,
                    value: true,
                    date: true,
                },
                where: {
                    user: {
                        id: id,
                    },
                    date: Between(new Date(year, month - 1, 1), new Date(year, month, 0)),
                },
            });
        } catch (error: any) {
            throw new DataBaseError("Erro ao buscar receita", error, error.code);
        }
    }
}
