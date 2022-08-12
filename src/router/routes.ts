import { Router, Request, Response } from "express";
import { UserController } from "../controller";
import { auth } from "../middleware/Auth";
import { UserRepository } from "../repository/UserRepository";
import { validateCreateUserSchema, validateLoginUserSchema, validateUpdateUserSchema } from "../schema";
import { UserService } from "../service/UserService";

const userController = new UserController(new UserService(new UserRepository()));

const routes = Router();

routes.post("/user/sigin", validateCreateUserSchema, (req: Request, res: Response) => userController.createUser(req, res));
routes.post("/user/login", validateLoginUserSchema, (req: Request, res: Response) => userController.login(req, res));
routes.get("/user/me", auth, (req: Request, res: Response) => userController.getUser(req, res));
routes.patch("/user/me", auth, validateUpdateUserSchema, (req: Request, res: Response) =>
    userController.updateUser(req, res)
);
routes.delete("/user/me", auth, (req: Request, res: Response) => userController.deleteUser(req, res));

export default routes;
