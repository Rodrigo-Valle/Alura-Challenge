import { Router, Request, Response } from "express";
import { UserController } from "../controller";
import { auth } from "../middleware/Auth";
import { UserRepository } from "../repository/UserRepository";
import { validateCreateUserSchema, validateLoginUserSchema, validateUpdateUserSchema } from "../schema";
import { UserService } from "../service/UserService";

const userController = new UserController(new UserService(new UserRepository()));

const routes = Router();

  /**
   * @openapi
   * '/user/me':
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
 routes.get("/me", auth, (req: Request, res: Response) => userController.getUser(req, res));

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
routes.post("/sigin", validateCreateUserSchema, (req: Request, res: Response) => userController.createUser(req, res));

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
routes.post("/login", validateLoginUserSchema, (req: Request, res: Response) => userController.loginUser(req, res));

   /**
   * @openapi
   * '/user/me':
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
routes.patch("/me", auth, validateUpdateUserSchema, (req: Request, res: Response) =>
    userController.updateUser(req, res)
);

  /**
   * @openapi
   * '/user/me':
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
   *              $ref: '#/components/schemas/DeleteUserResponse'
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
routes.delete("/me", auth, (req: Request, res: Response) => userController.deleteUser(req, res));

export default routes;
