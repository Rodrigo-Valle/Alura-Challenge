import { Request, Response } from "express";

export interface IExpenseController {
    createExpense(req: Request, res: Response): Promise<Response>;
    updateExpense(req: Request, res: Response): Promise<Response>;
    deleteExpense(req: Request, res: Response): Promise<Response>;
    getExpense(req: Request, res: Response): Promise<Response>;
    getExpenses(req: Request, res: Response): Promise<Response>;
    getExpensesByDate(req: Request, res: Response): Promise<Response>;
}
