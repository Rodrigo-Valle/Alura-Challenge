import { DeleteResult } from "typeorm";
import { ISaveExpenseDTO } from "../../../src/dto/ExpenseDTO";
import { Expense } from "../../../src/entity";
import { IExpenseRepository } from "../../../src/repository/interface/IExpenseRepository";
import { returnExpenseMock } from "../dto/ExpenseMock";

export class ExpenseRepositoryMock implements IExpenseRepository {
    public async saveExpense(_expense: ISaveExpenseDTO): Promise<Expense> {
        return returnExpenseMock;
    }
    public async getExpensesById(id: string): Promise<Expense[] | null> {
        if (id !== "1") return null;

        return [returnExpenseMock];
    }
    public async getExpenseById(id: string, _userId: string): Promise<Expense | null> {
        if (id !== "1") return null;

        return returnExpenseMock;
    }
    public async deleteExpense(id: string, _userId: string): Promise<DeleteResult> {
        const deleteResult = {} as unknown as DeleteResult;
        if (id !== "1") {
            deleteResult.affected = 0;
            return deleteResult;
        }

        deleteResult.affected = 1;
        return deleteResult;
    }
}
