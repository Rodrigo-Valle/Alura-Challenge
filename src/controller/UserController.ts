import { Request, Response } from 'express';
import { IUserController } from '../interface/Controller/IUserController';
import { IUserService } from '../interface/service/IUserService';

export class UserController implements IUserController {
    private readonly userService: IUserService
    constructor(userService: IUserService) {
        this.userService = userService
     }

    async create(req: Request, res: Response): Promise<any> {
        try {
            const response = await this.userService.create(req.body);

        res.send(response);
        } catch (error) {
            res.status(400);
            res.send(error)
        }
    }
}