/**
 * @openapi
 * components:
 *  schemas:
 *    NotFoundError:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: false
 *        status:
 *          type: number
 *          default: 404
 *        message:
 *          type: string
 *        detail:
 *          type: string
 *    UnauthorizedError:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: false
 *        status:
 *          type: number
 *          default: 401
 *        message:
 *          type: string
 *        detail:
 *          type: string
 *    ValidationError:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: false
 *        status:
 *          type: number
 *          default: 401
 *        message:
 *          type: string
 *        detail:
 *          type: array
 *          items:
 *            type: string
 *    DataBaseError:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: false
 *        status:
 *          type: number
 *          default: 500
 *        message:
 *          type: string
 *        detail:
 *          type: string
 *    GetUserResponse:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: true
 *        status:
 *          type: number
 *          default: 201
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *            cpf:
 *              type: string
 *            name:
 *              type: string
 *            email:
 *              type: string
 *    DeleteUserResponse:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: true
 *        status:
 *          type: number
 *          default: 201
 *        message:
 *          type: string
 *        data:
 *          type: object
 *          properties:
 *            raw:
 *              type: string
 *            affected:
 *              type: string
 */



