import { DeleteResult } from "typeorm";
import { ISaveExpenseDTO } from "../../dto/ExpenseDTO";
import { Expense } from "../../entity";

export interface IExpenseRepository {
    saveExpense(Expense: ISaveExpenseDTO): Promise<Expense>;
    deleteExpense(id: string, userId: string): Promise<DeleteResult>;
    getExpenseById(id: string, userId: string): Promise<Expense | null>;
    getExpensesById(id: string, description: string): Promise<Expense[] | null>;
    getExpensesByDate(id: string, year: number, month: number): Promise<Expense[] | null>;
}
