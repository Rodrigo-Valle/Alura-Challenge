import { Request, Response } from "express";
import { IResponse } from "../interface/IResponse";
import { IIncomeService } from "../service/interface/IIncomeService";
import { UnauthorizedError } from "../utils/exceptions";
import { ProcessError } from "../utils/processError";
import { IIncomeController } from "./interface/IIncomeController";

export class IncomeController implements IIncomeController{
    private readonly incomeService: IIncomeService;

    constructor(incomeService: IIncomeService) {
        this.incomeService = incomeService;
    }

    public async createIncome(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const result = await this.incomeService.createIncome(req.body, req.id);

            const response: IResponse = {
                ok: true,
                status: 201,
                message: "Receita cadastrada com sucesso",
                data: result,
            };

            return res.status(201).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async getIncome(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const { id } = req.params
            const result = await this.incomeService.getIncome(id, req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Receita retornada com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async getIncomes(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const result = await this.incomeService.getIncomes(req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Receitas retornadas com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async updateIncome(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const { id } = req.params

            const result = await this.incomeService.updateIncome(id, req.body, req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Receita atualizada com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async deleteIncome(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const { id } = req.params

            const result = await this.incomeService.deleteIncome(id, req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Receita deletada com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }
}    