import { Router, Request, Response } from "express";
import { IncomeController } from "../controller/IncomeController";
import { IncomeRepository } from "../repository/IncomeRepository";
import { UserRepository } from "../repository/UserRepository";
import { IncomeService } from "../service/IncomeService";
import { auth } from "../middleware/Auth";
import {validateCreateIncomeSchema, validateUpdateIncomeSchema } from "../schema/index"


const incomeController = new IncomeController(new IncomeService(new IncomeRepository(), new UserRepository()));

const incomeRoutes = Router();


/**
* @openapi
* '/income':
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
*              $ref: '#/components/schemas/GetIncomeResponse'
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
incomeRoutes.post("", auth, validateCreateIncomeSchema, (req: Request, res: Response ) => incomeController.createIncome(req, res));

/**
* @openapi
* '/income/{id}':
*  get:
*     tags:
*     - Income
*     summary: Get a Income
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
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
incomeRoutes.get("/:id", auth, (req: Request, res: Response ) => incomeController.getIncome(req, res));

/**
* @openapi
* '/income':
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
incomeRoutes.get("", auth, (req: Request, res: Response ) => incomeController.getIncomes(req, res));

/**
* @openapi
* '/income/{id}':
*  patch:
*     tags:
*     - Income
*     summary: Update an Income
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Income Id
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*              $ref: '#/components/schemas/UpdateIncomeInput'
*     responses:
*      200:
*        description: Success
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/GetIncomeResponse'
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
incomeRoutes.patch("/:id", auth, validateUpdateIncomeSchema, (req: Request, res: Response ) => incomeController.updateIncome(req, res));

/**
 * @openapi
 * '/income':
 *  delete:
 *     tags:
 *     - Income
 *     summary: Delete a Income
 *     security:
 *       - bearerAuth: []
 *     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Income Id
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeleteResponse'
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
incomeRoutes.delete("/:id", auth, (req: Request, res: Response ) => incomeController.deleteIncome(req, res));

export default incomeRoutes;
