import { DeleteResult } from "typeorm";
import {
    ISaveExpenseDTO,
    IExpenseResponseDTO,
    IUpdateExpenseDTO,
} from "../dto/ExpenseDTO";
import { IExpenseRepository } from "../repository/interface/IExpenseRepository";
import { IUserRepository } from "../repository/interface/IUserRepository";
import { NotFoundError } from "../utils/exceptions";
import { IExpenseService } from "./interface/IExpenseService";
import { v4 as uuid } from "uuid";

export class ExpenseService implements IExpenseService {
    private readonly expenseRepository: IExpenseRepository;
    private readonly userRespository: IUserRepository;

    constructor(expenseRepository: IExpenseRepository, userRespository: IUserRepository) {
        this.expenseRepository = expenseRepository;
        this.userRespository = userRespository;
    }

    public async createExpense(
        createExpenseData: ISaveExpenseDTO,
        userId: string
    ): Promise<IExpenseResponseDTO> {
        const user = await this.userRespository.getUserById(userId);

        if (!user) throw new NotFoundError("Usuário não localizado");
        createExpenseData.user = user;
        createExpenseData.id = uuid();

        const result = await this.expenseRepository.saveExpense(createExpenseData);

        const reponse: IExpenseResponseDTO = {
            id: result.id,
            description: result.description,
            value: result.value,
            date: result.date,
        };

        return reponse;
    }

    public async getExpenses(userId: string): Promise<IExpenseResponseDTO[]> {
        const result = await this.expenseRepository.getExpensesById(userId);

        if (!result) throw new NotFoundError("Despesas não localizadas");

        return result.map((expense) => {
            let expenseMapped: IExpenseResponseDTO = {
                id: expense.id,
                description: expense.description,
                value: expense.value,
                date: expense.date,
            };
            return expenseMapped;
        });
    }

    public async getExpense(id: string, userId: string): Promise<IExpenseResponseDTO> {
        const result = await this.expenseRepository.getExpenseById(id, userId);

        if (!result) throw new NotFoundError("Despesa não localizada");

        const reponse: IExpenseResponseDTO = {
            id: result.id,
            description: result.description,
            value: result.value,
            date: result.date,
        };

        return reponse;
    }

    public async updateExpense(
        id: string,
        updateExpenseData: IUpdateExpenseDTO,
        userId: string
    ): Promise<IExpenseResponseDTO> {
        const expense = await this.expenseRepository.getExpenseById(id, userId);

        if (!expense) throw new NotFoundError("Despesa não localizada");

        const updatedExpense: ISaveExpenseDTO = {
            description: updateExpenseData.description
                ? updateExpenseData.description
                : expense.description,
            value: updateExpenseData.value ? updateExpenseData.value : expense.value,
            date: updateExpenseData.date ? updateExpenseData.date : expense.date,
            id: expense.id,
            user: expense.user,
        };

        const result = await this.expenseRepository.saveExpense(updatedExpense);

        const reponse: IExpenseResponseDTO = {
            id: result.id,
            description: result.description,
            value: result.value,
            date: result.date,
        };

        return reponse;
    }

    public async deleteExpense(id: string, userId: string): Promise<DeleteResult> {
        const result = await this.expenseRepository.deleteExpense(id, userId);

        if (
            result.affected === null ||
            result.affected === undefined ||
            result.affected < 1
        )
            throw new NotFoundError("Despesa não localizada");

        return result;
    }
}
