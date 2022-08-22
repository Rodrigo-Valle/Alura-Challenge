import { Router, Request, Response } from "express";
import { auth } from "../middleware/Auth";
import { ExpenseController } from "../controller";
import { ExpenseService } from "../service";
import { ExpenseRepository, UserRepository } from "../repository";
import {
    validateCreateExpenseSchema,
    validateUpdateExpenseSchema,
} from "../schema/index";

const expenseController = new ExpenseController(
    new ExpenseService(new ExpenseRepository(), new UserRepository())
);

const expenseRoutes = Router();

/**
 * @openapi
 * '/expense':
 *  post:
 *     tags:
 *     - Expense
 *     summary: Create a Expense
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateExpenseInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetExpenseResponse'
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
expenseRoutes.post("", auth, validateCreateExpenseSchema, (req: Request, res: Response) =>
    expenseController.createExpense(req, res)
);

/**
 * @openapi
 * '/expense/{id}':
 *  get:
 *     tags:
 *     - Expense
 *     summary: Get a Expense
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
 *              $ref: '#/components/schemas/GetExpensesResponse'
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
expenseRoutes.get("/:id", auth, (req: Request, res: Response) =>
    expenseController.getExpense(req, res)
);

/**
 * @openapi
 * '/expense':
 *  get:
 *     tags:
 *     - Expense
 *     summary: Get a list of Expenses
 *     security:
 *       - bearerAuth: []
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetExpensesResponse'
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
expenseRoutes.get("", auth, (req: Request, res: Response) =>
    expenseController.getExpenses(req, res)
);

/**
 * @openapi
 * '/expense/{id}':
 *  patch:
 *     tags:
 *     - Expense
 *     summary: Update an Expense
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Expense Id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateExpenseInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetExpenseResponse'
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
expenseRoutes.patch(
    "/:id",
    auth,
    validateUpdateExpenseSchema,
    (req: Request, res: Response) => expenseController.updateExpense(req, res)
);

/**
 * @openapi
 * '/expense/{id}':
 *  delete:
 *     tags:
 *     - Expense
 *     summary: Delete a Expense
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Expense Id
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
expenseRoutes.delete("/:id", auth, (req: Request, res: Response) =>
    expenseController.deleteExpense(req, res)
);

export default expenseRoutes;
