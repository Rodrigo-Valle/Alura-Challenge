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
    getIncomes(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    getIncome(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    updateIncome(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    deleteIncome(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
}    