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
 */
