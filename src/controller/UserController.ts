import { Request, Response } from "express";
import { IUserController } from "./interface/IUserController";
import { IUserService } from "../service/interface/IUserService";
import { ProcessError } from "../utils/processError";
import { IResponse } from "../interface/IResponse";
import { UnauthorizedError } from "../utils/exceptions";

export class UserController implements IUserController {
    private readonly userService: IUserService;
    constructor(userService: IUserService) {
        this.userService = userService;
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.userService.create(req.body);

            const response: IResponse = {
                ok: true,
                status: 201,
                message: "Usuário cadastrado com sucesso",
                body: result,
            };

            return res.status(201).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.userService.login(req.body);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Token gerado com sucesso",
                body: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async getUser(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não logado", "Acesso negado");

            const result = await this.userService.getUser(req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Usuário retornado com sucesso",
                body: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não logado", "Acesso negado");

            const result = await this.userService.updateUser(req.id, req.body);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Usuário atualizado com sucesso",
                body: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não logado", "Acesso negado");

            const result = await this.userService.deleteUser(req.id);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Usuário deletado com sucesso",
                body: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }
}
