import { Router, Request, Response } from 'express';
import { UserController } from '../controller/UserController';
import { UserRepository } from '../repository/UserRepository';
import { validateCreateUser } from '../schema/UserSchema/user.create.schema';
import { UserService } from '../service/UserService';

const userController = 
    new UserController(
        new UserService(
            new UserRepository()
        )
    )

const routes = Router();

console.log("rotas")

routes.post("/user", validateCreateUser, (req: Request, res: Response) => userController.create(req, res));

export default routes;