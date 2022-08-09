import { Router, Request, Response } from 'express';
import { UserController } from '../controller/UserController';
import { User } from '../entity';
import { UserRepository } from '../repository/UserRepository';
import { UserService } from '../service/UserService';

const userController = 
    new UserController(
        new UserService(
            new UserRepository()
        )
    )

const routes = Router();

console.log("rotas")

routes.post("/user", (req: Request, res: Response) => userController.create(req, res));

export default routes;