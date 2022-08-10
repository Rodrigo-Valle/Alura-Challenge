import { Request, Response } from 'express';
import { IUserController } from './interface/IUserController';
import { IUserService } from '../service/interface/IUserService';
import { ProcessError } from '../utils/processError';

export class UserController implements IUserController {
    private readonly userService: IUserService
    constructor(userService: IUserService) {
        this.userService = userService
     }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.userService.create(req.body);

            return res.status(201).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    login(req: Request, res: Response): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getUser(req: Request, res: Response): Promise<any> {
        throw new Error('Method not implemented.');
    }
    updateUser(req: Request, res: Response): Promise<any> {
        throw new Error('Method not implemented.');
    }
    deleteUser(req: Request, res: Response): Promise<any> {
        throw new Error('Method not implemented.');
    }
}