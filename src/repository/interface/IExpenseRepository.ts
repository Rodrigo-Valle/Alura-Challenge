import { DeleteResult } from "typeorm";
import { ISaveExpenseDTO } from "../../dto/ExpenseDTO";
import { Expense } from "../../entity";

export interface IExpenseRepository {
    saveExpense(Expense: ISaveExpenseDTO): Promise<Expense>;
    getExpensesById(id: string): Promise<Expense[] | null>;
    getExpenseById(id: string, userId: string): Promise<Expense | null>;
    deleteExpense(id: string, userId: string): Promise<DeleteResult>;
}
