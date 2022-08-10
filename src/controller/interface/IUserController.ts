import { Request, Response } from 'express';

export interface IUserController {
    create(req: Request, res: Response): Promise<any>;
    login(req: Request, res: Response): Promise<any>;
    getUser(req: Request, res: Response): Promise<any>;
    updateUser(req: Request, res: Response): Promise<any>;
    deleteUser(req: Request, res: Response): Promise<any>;
}