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
 *      optional:
 *        - category
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
 *        category:
 *          type: string
 *          default: outras
 *    UpdateExpenseInput:
 *      type: object
 *      optional:
 *        - description
 *        - value
 *        - date
 *        - category
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
 *        category:
 *          type: string
 *          default: outras
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
 *              category:
 *                type: string
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
 *            category:
 *              type: string
 */
