/**
 * @openapi
 * components:
 *  schemas:
 *    CreateExpenseInput:
 *      type: object
 *      required:
 *        - description
 *        - value
 *        - date
 *      properties:
 *        description:
 *          type: string
 *          default: descricao
 *        value:
 *          type: number
 *          default: 1000.00
 *        date:
 *          type: string
 *          format: date
 *          default: YYYY-MM-DD
 *    UpdateExpenseInput:
 *      type: object
 *      optional:
 *        - description
 *        - value
 *        - date
 *      properties:
 *        description:
 *          type: string
 *          default: descricao
 *        value:
 *          type: number
 *          default: 1000.00
 *        date:
 *          type: string
 *          format: date
 *          default: YYYY-MM-DD
 *    GetExpensesResponse:
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
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              description:
 *                type: string
 *              value:
 *                type: number
 *              date:
 *                type: string
 *                format: date
 *    GetExpenseResponse:
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
 *            description:
 *              type: string
 *            value:
 *              type: number
 *            date:
 *              type: string
 *              format: date
 */
