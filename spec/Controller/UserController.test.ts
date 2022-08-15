import { UserController } from "../../src/controller";
import { UserServiceMock } from "../mocks/service/UserServiceMock";
import {Request, Response} from "express";
import { tokenResponseMock, userResponseMock } from "../mocks/dto/UserMocks";

const userControllerTest = new UserController(new UserServiceMock());
let mReq = ({} as unknown) as Request;
let mRes = ({ status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown) as Response;

describe('UserController', () => {
    afterEach(() => {
        mReq = ({} as unknown) as Request;
        mRes = ({ status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown) as Response;
    })
    afterAll(() => {
        jest.resetAllMocks();
    });

    it('should return a user when create susscefully', async () => {
        await userControllerTest.createUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(201)
        expect(mRes.json).toBeCalledWith({
            ok: true,
            status: 201,
            message: "Usuário cadastrado com sucesso",
            data: userResponseMock,
        })
    }) 

    it("should treat an error when create fails", async () => {
        jest.spyOn(UserServiceMock.prototype, 'createUser').mockRejectedValue(new Error('create user error'));

        await userControllerTest.createUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(500);
    })

    it('should return a token when login susscefully', async () => {
        await userControllerTest.loginUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(200)
        expect(mRes.json).toBeCalledWith({
            ok: true,
            status: 200,
            message: "Token gerado com sucesso",
            data: tokenResponseMock
        })
    }) 

    it("should treat an error when login fails", async () => {
        jest.spyOn(UserServiceMock.prototype, 'loginUser').mockRejectedValue(new Error('login error'));

        await userControllerTest.loginUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(500);
    })

    it('should return a user when getUser susscefully', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mReq.id = "1";

        await userControllerTest.getUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(200)
        expect(mRes.json).toBeCalledWith({
            ok: true,
            status: 200,
            message: "Usuário retornado com sucesso",
            data: userResponseMock,
        })
    })

    it('should return a error when getUser not logged', async () => {
        await userControllerTest.getUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(401)
    })

    it("should treat an error when getUser fails", async () => {
        jest.spyOn(UserServiceMock.prototype, 'getUser').mockRejectedValue(new Error('getUser user error'));

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mReq.id = "1";

        await userControllerTest.getUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(500);
    })

    it('should return a user when updateUser susscefully', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mReq.id = "1";

        await userControllerTest.updateUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(200)
        expect(mRes.json).toBeCalledWith({
            ok: true,
            status: 200,
            message: "Usuário atualizado com sucesso",
            data: userResponseMock,
        })
    })

    it('should return a error when updateUser not logged', async () => {
        await userControllerTest.updateUser(mReq, mRes)

        expect(mRes.status).toBeCalledWith(401);
    })

    it("should treat an error when updateUser fails", async () => {
        jest.spyOn(UserServiceMock.prototype, 'updateUser').mockRejectedValue(new Error('updateUser error'));

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mReq.id = "1";
        
        await userControllerTest.updateUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(500);
    })

    it('should return a deleteResult when deleteUser susscefully', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mReq.id = "1";

        await userControllerTest.deleteUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(200)

    })

    it('should return a error when deleteUser fails', async () => {
        jest.spyOn(UserServiceMock.prototype, 'deleteUser').mockRejectedValue(new Error('deleteUser error'));

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mReq.id = "1";
        
        await userControllerTest.deleteUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(500);

    })

    it('should return a error when deleteUser not logged', async () => {
        await userControllerTest.deleteUser(mReq, mRes)
        expect(mRes.status).toBeCalledWith(401)

    })
})