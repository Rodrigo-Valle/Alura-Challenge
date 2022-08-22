import { Request, Response } from "express";

export interface IUserController {
    createUser(req: Request, res: Response): Promise<Response>;
    loginUser(req: Request, res: Response): Promise<Response>;
    getUser(req: Request, res: Response): Promise<Response>;
    updateUser(req: Request, res: Response): Promise<Response>;
    deleteUser(req: Request, res: Response): Promise<Response>;
}
