import { Request, Response } from "express";
import { IResponse } from "../interface/IResponse";
import { IExpenseService } from "../service/interface/IExpenseService";
import { UnauthorizedError } from "../utils/exceptions";
import { ProcessError } from "../utils/processError";
import { IExpenseController } from "./interface/IExpenseController";

export class ExpenseController implements IExpenseController {
    private readonly expenseService: IExpenseService;

    constructor(expenseService: IExpenseService) {
        this.expenseService = expenseService;
    }

    public async createExpense(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const result = await this.expenseService.createExpense(req.body, req.id);

            const response: IResponse = {
                ok: true,
                status: 201,
                message: "Despesa cadastrada com sucesso",
                data: result,
            };

            return res.status(201).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async updateExpense(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const { id } = req.params;

            const result = await this.expenseService.updateExpense(id, req.body, req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Despesa atualizada com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async deleteExpense(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const { id } = req.params;

            const result = await this.expenseService.deleteExpense(id, req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Despesa deletada com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async getExpense(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const { id } = req.params;
            const result = await this.expenseService.getExpense(id, req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Despesa retornada com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async getExpenses(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const { description } = req.query;
            const result = await this.expenseService.getExpenses(req.id, description?.toString() || "");

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Despesas retornadas com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async getExpensesByDate(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const month = parseInt(req.params.month);
            const year = parseInt(req.params.year);
            const result = await this.expenseService.getExpensesByDate(req.id, year, month);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Despesas retornadas com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }
}
