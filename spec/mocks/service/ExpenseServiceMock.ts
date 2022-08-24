import { DeleteResult } from "typeorm";
import { ISaveExpenseDTO, IExpenseResponseDTO, IUpdateExpenseDTO } from "../../../src/dto/ExpenseDTO";
import { IExpenseService } from "../../../src/service/interface/IExpenseService";
import { expenseResponseMock } from "../dto/ExpenseMock";

export class ExpenseServiceMock implements IExpenseService {
    public async createExpense(_createExpenseData: ISaveExpenseDTO, _userId: string): Promise<IExpenseResponseDTO> {
        return expenseResponseMock;
    }

    public async updateExpense(
        _id: string,
        _updateExpenseData: IUpdateExpenseDTO,
        _userId: string
    ): Promise<IExpenseResponseDTO> {
        return expenseResponseMock;
    }

    public async deleteExpense(_id: string, _userId: string): Promise<DeleteResult> {
        const response: DeleteResult = {
            raw: {
                success: true,
            },
            affected: 1,
        };
        return response;
    }

    public async getExpense(_id: string, _userId: string): Promise<IExpenseResponseDTO> {
        return expenseResponseMock;
    }

    public async getExpenses(_userId: string): Promise<IExpenseResponseDTO[]> {
        return [expenseResponseMock];
    }

    public async getExpensesByDate(userId: string, year: number, month: number): Promise<IExpenseResponseDTO[]> {
        return [expenseResponseMock];
    }
}
