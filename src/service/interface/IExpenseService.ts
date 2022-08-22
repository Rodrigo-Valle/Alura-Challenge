import { DeleteResult } from "typeorm";
import {
    IExpenseResponseDTO,
    ISaveExpenseDTO,
    IUpdateExpenseDTO,
} from "../../dto/ExpenseDTO";

export interface IExpenseService {
    createExpense(
        createExpenseData: ISaveExpenseDTO,
        userId: string
    ): Promise<IExpenseResponseDTO>;
    getExpenses(userId: string): Promise<IExpenseResponseDTO[]>;
    getExpense(id: string, userId: string): Promise<IExpenseResponseDTO>;
    updateExpense(
        id: string,
        updateExpenseData: IUpdateExpenseDTO,
        userId: string
    ): Promise<IExpenseResponseDTO>;
    deleteExpense(id: string, userId: string): Promise<DeleteResult>;
}
