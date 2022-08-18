import { Router, Request, Response } from "express";
import { IncomeController } from "../controller/IncomeController";
import { IncomeRepository } from "../repository/IncomeRepository";
import { UserRepository } from "../repository/UserRepository";
import { IncomeService } from "../service/IncomeService";
import { auth } from "../middleware/Auth";
import {validateCreateIncomeSchema } from "../schema/index"


const incomeController = new IncomeController(new IncomeService(new IncomeRepository(), new UserRepository()));

const routes = Router();


   /**
   * @openapi
   * '/income/create':
   *  post:
   *     tags:
   *     - Income
   *     summary: Create a Income
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateIncomeInput'
   *     responses:
   *      201:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateIncomeResponse'
   *      400:
   *        description: Bad equest
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ValidationError'
   *      401:
   *        description: Unauthorized
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/UnauthorizedError'
   *      500:
   *        description: Internal Server Error
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/DataBaseError'
   */
routes.post("/create", auth, validateCreateIncomeSchema, (req: Request, res: Response ) => incomeController.createIncome(req, res));

   /**
   * @openapi
   * '/income/':
   *  get:
   *     tags:
   *     - Income
   *     summary: Get a list of Incomes
   *     security:
   *       - bearerAuth: []
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/GetIncomesResponse'
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
routes.get("/", auth, (req: Request, res: Response ) => incomeController.getIncomes(req, res));



export default routes;
