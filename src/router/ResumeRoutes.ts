import { Router, Request, Response } from "express";
import { ResumeController } from "../controller/ResumeController";
import { auth } from "../middleware/Auth";
import { ExpenseRepository, IncomeRepository } from "../repository";
import { ResumeService } from "../service/ResumeService";

const resumeController = new ResumeController(new ResumeService(new IncomeRepository(), new ExpenseRepository()));

const resumeRoutes = Router();

/**
 * @openapi
 * '/resume/{year}/{month}':
 *  get:
 *     tags:
 *     - Resume
 *     summary: Get a Resume by Date
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *       - in: path
 *         name: month
 *         required: true
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetResumeResponse'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UnauthorizedError'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NotFoundError'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DataBaseError'
 */
resumeRoutes.get("/:year/:month", auth, (req: Request, res: Response) => resumeController.getResume(req, res));

export default resumeRoutes;
