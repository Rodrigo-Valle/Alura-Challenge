import { Request, Response } from "express";

export interface IResumeController {
    getResume(req: Request, res: Response): Promise<Response>;
}
