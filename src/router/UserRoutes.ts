import { Router, Request, Response } from "express";
import { auth } from "../middleware/Auth";
import { UserController } from "../controller";
import { UserRepository } from "../repository";
import { UserService } from "../service/UserService";
import { validateCreateUserSchema, validateLoginUserSchema, validateUpdateUserSchema } from "../schema";

const userController = new UserController(new UserService(new UserRepository()));

const userRoutes = Router();

/**
 * @openapi
 * '/user/sigin':
 *  post:
 *     tags:
 *     - User
 *     summary: Create a User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/SiginUserInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SiginUserResponse'
 *      400:
 *        description: Bad equest
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ValidationError'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DataBaseError'
 */
userRoutes.post("/sigin", validateCreateUserSchema, (req: Request, res: Response) =>
    userController.createUser(req, res)
);

/**
 * @openapi
 * '/user/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Login a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/LoginUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginUserResponse'
 *      400:
 *        description: Bad equest
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ValidationError'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NotFoundError'
 */
userRoutes.post("/login", validateLoginUserSchema, (req: Request, res: Response) => userController.loginUser(req, res));

/**
 * @openapi
 * '/user':
 *  patch:
 *     tags:
 *     - User
 *     summary: Update a User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateUserInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SiginUserResponse'
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
userRoutes.patch("", auth, validateUpdateUserSchema, (req: Request, res: Response) =>
    userController.updateUser(req, res)
);

/**
 * @openapi
 * '/user':
 *  delete:
 *     tags:
 *     - User
 *     summary: Delete a user
 *     security:
 *       - bearerAuth: []
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
userRoutes.delete("", auth, (req: Request, res: Response) => userController.deleteUser(req, res));

/**
 * @openapi
 * '/user':
 *  get:
 *     tags:
 *     - User
 *     summary: Get a user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetUserResponse'
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
 */
userRoutes.get("", auth, (req: Request, res: Response) => userController.getUser(req, res));

export default userRoutes;
