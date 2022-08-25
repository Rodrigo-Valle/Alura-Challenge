import { UnauthorizedError } from "../utils/exceptions";
import { IResumeController } from "./interface/IResumeController";
import { Request, Response } from "express";
import { IResumeService } from "../service/interface/IResumeService";
import { IResponse } from "../interface/IResponse";
import { ProcessError } from "../utils/processError";

export class ResumeController implements IResumeController {
    private readonly resumeService: IResumeService;

    constructor(resumeService: IResumeService) {
        this.resumeService = resumeService;
    }

    public async getResume(req: Request, res: Response): Promise<Response> {
        try {
            if (req.id === undefined) throw new UnauthorizedError("Usuário não autorizado");

            const month = parseInt(req.params.month);
            const year = parseInt(req.params.year);
            const result = await this.resumeService.getResume(req.id, year, month);

            const response: IResponse = {
                ok: true,
                status: 200,
                message: "Despesas retornadas com sucesso",
                data: result,
            };

            return res.status(200).json(response);
        } catch (error) {
            return ProcessError(res, error);
        }
    }
}
