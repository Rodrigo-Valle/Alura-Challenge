import { IResumeResponseDTO } from "../dto/ResumeDTO";
import { Expense } from "../entity";
import { IExpenseRepository } from "../repository/interface/IExpenseRepository";
import { IIncomeRepository } from "../repository/interface/IIncomeRepository";
import { IResumeService } from "./interface/IResumeService";

export class ResumeService implements IResumeService {
    private readonly incomeRepository: IIncomeRepository;
    private readonly expenseRepository: IExpenseRepository;

    constructor(incomeRepository: IIncomeRepository, expenseRepository: IExpenseRepository) {
        this.incomeRepository = incomeRepository;
        this.expenseRepository = expenseRepository;
    }
    public async getResume(userId: string, year: number, month: number): Promise<IResumeResponseDTO> {
        const incomes = await this.incomeRepository.getIncomesByDate(userId, year, month);
        const expenses = await this.expenseRepository.getExpensesByDate(userId, year, month);

        const totalIncomes = this.getTotalValue(incomes);
        const totalExpenses = this.getTotalValue(expenses);
        const valueByCategory = this.getValueByCategory(expenses);

        const response: IResumeResponseDTO = {
            balance: totalIncomes - totalExpenses,
            totalIncomes: totalIncomes,

            totalExpenses: totalExpenses,

            expensesByCategory: valueByCategory,
        };

        return response;
    }

    private getTotalValue(array: any[] | null): number {
        return array?.reduce((total, objeto) => total + objeto.value, 0);
    }

    private getValueByCategory(expenses: Expense[] | null): any {
        return expenses?.reduce((result, expense) => {
            result[expense.category] = result[expense.category] || {};

            if (!result[expense.category].total) result[expense.category].total = 0;

            result[expense.category].total += expense.value;
            return result;
        }, Object.create(null));
    }
}
