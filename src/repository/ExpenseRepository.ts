import { DeleteResult, Like } from "typeorm";
import { AppDataSource } from "../datasource";
import { ISaveExpenseDTO } from "../dto/ExpenseDTO";
import { Expense } from "../entity";
import { DataBaseError } from "../utils/exceptions";
import { IExpenseRepository } from "./interface/IExpenseRepository";

export class ExpenseRepository implements IExpenseRepository {
    private readonly expenseRepository;

    constructor() {
        this.expenseRepository = AppDataSource.getRepository(Expense);
    }

    public async saveExpense(expense: ISaveExpenseDTO): Promise<Expense> {
        try {
            return await this.expenseRepository.save(expense);
        } catch (error: any) {
            throw new DataBaseError("Erro ao salvar despesa", error, error.code);
        }
    }

    public async getExpensesById(id: string, description: string): Promise<Expense[] | null> {
        try {
            return await this.expenseRepository.find({
                relations: {
                    user: true,
                },
                where: {
                    user: {
                        id: id,
                    },
                    description: Like(`%${description}%`)
                },
            });
        } catch (error: any) {
            throw new DataBaseError("Erro ao buscar despesa", error, error.code);
        }
    }

    public async getExpenseById(id: string, userId: string): Promise<Expense | null> {
        try {
            return await this.expenseRepository.findOne({
                relations: {
                    user: true,
                },
                where: {
                    id: id,
                    user: {
                        id: userId,
                    },
                },
            });
        } catch (error: any) {
            throw new DataBaseError("Erro ao salvar despesa", error, error.code);
        }
    }

    public async deleteExpense(id: string, userId: string): Promise<DeleteResult> {
        try {
            return await this.expenseRepository
                .createQueryBuilder()
                .delete()
                .from("Expense")
                .where("id = :expenseId", { expenseId: id })
                .andWhere("userId = :userId", { userId: userId })
                .execute();
        } catch (error: any) {
            throw new DataBaseError("Erro ao deletar despesa", error, error.code);
        }
    }
}
