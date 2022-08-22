/**
 * @openapi
 * components:
 *  schemas:
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
 *    SiginUserResponse:
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
 *    LoginUserResponse:
 *      type: object
 *      properties:
 *        ok:
 *          type: boolean
 *          default: true
 *        status:
 *          type: number
 *          default: 200
 *        message:
 *          type: string
 *        data: 
 *          type: object
 *          properties:
 *            token:
 *              type: string
 *    LoginUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: email@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    SiginUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *        - name
 *        - cpf
 *      properties:
 *        email:
 *          type: string
 *          default: email@example.com
 *        password:
 *          type: string
 *          default: 12345678
 *        name:
 *          type: string
 *          default: Nome
 *        cpf:
 *          type: string
 *          default: 11122233344
 *    UpdateUserInput:
 *      type: object
 *      optional:
 *        - email
 *        - password
 *        - name
 *        - cpf
 *      properties:
 *        email:
 *          type: string
 *          default: email@example.com
 *        password:
 *          type: string
 *          default: 12345678
 *        name:
 *          type: string
 *          default: Nome
 *        cpf:
 *          type: string
 *          default: 11122233344
 */



