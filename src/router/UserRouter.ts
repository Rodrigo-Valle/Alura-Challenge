import { Router, Request, Response } from "express";
import { UserController } from "../controller/UserController";
import { auth } from "../middleware/Auth";
import { UserRepository } from "../repository/UserRepository";
import { validateCreateUserSchema, validateLoginUserSchema } from "../schema/UserSchema";
import { TokenService } from "../service/tokenService";
import { UserService } from "../service/UserService";

const userController = new UserController(new UserService(new UserRepository(), new TokenService()));

const routes = Router();

routes.post("/user", validateCreateUserSchema, (req: Request, res: Response) => userController.create(req, res));
routes.post("/user/login", validateLoginUserSchema, (req: Request, res: Response) => userController.login(req, res));
routes.get("/user/me", auth, (req: Request, res: Response) => userController.getUser(req, res));

export default routes;
