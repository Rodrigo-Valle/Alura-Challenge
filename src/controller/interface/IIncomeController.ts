import { Request, Response } from "express";

export interface IIncomeController {
    createIncome(req: Request, res: Response): Promise<Response>;
    updateIncome(req: Request, res: Response): Promise<Response>;
    deleteIncome(req: Request, res: Response): Promise<Response>;
    getIncome(req: Request, res: Response): Promise<Response>;
    getIncomes(req: Request, res: Response): Promise<Response>;
    getIncomesByDate(req: Request, res: Response): Promise<Response>;
}
