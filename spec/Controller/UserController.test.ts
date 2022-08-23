import { UserController } from "../../src/controller";
import { UserServiceMock } from "../mocks/service/UserServiceMock";
import { Request, Response } from "express";
import { tokenResponseMock, userResponseMock } from "../mocks/dto/UserMock";
import { getMockReq, getMockRes } from "@jest-mock/express";

const userControllerTest = new UserController(new UserServiceMock());
const req = getMockReq({ id: "1", params: { id: "1" }});
const reqUnauthorized = getMockReq();
const { res } = getMockRes();

describe("UserController", () => {
    it("should return a user when create susscefully", async () => {
        await userControllerTest.createUser(req, res);
        expect(res.status).toBeCalledWith(201);
        expect(res.json).toBeCalledWith({
            ok: true,
            status: 201,
            message: "Usuário cadastrado com sucesso",
            data: userResponseMock,
        });
    });

    it("should treat an error when create fails", async () => {
        jest.spyOn(UserServiceMock.prototype, "createUser").mockRejectedValue(
            new Error("create user error")
        );

        await userControllerTest.createUser(req, res);
        expect(res.status).toBeCalledWith(500);
    });

    it("should return a token when login susscefully", async () => {
        await userControllerTest.loginUser(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            ok: true,
            status: 200,
            message: "Token gerado com sucesso",
            data: tokenResponseMock,
        });
    });

    it("should treat an error when login fails", async () => {
        jest.spyOn(UserServiceMock.prototype, "loginUser").mockRejectedValue(
            new Error("login error")
        );

        await userControllerTest.loginUser(req, res);
        expect(res.status).toBeCalledWith(500);
    });

    it("should return a user when getUser susscefully", async () => {
        await userControllerTest.getUser(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            ok: true,
            status: 200,
            message: "Usuário retornado com sucesso",
            data: userResponseMock,
        });
    });

    it("should return a error when getUser not logged", async () => {
        await userControllerTest.getUser(reqUnauthorized, res);
        expect(res.status).toBeCalledWith(401);
    });

    it("should treat an error when getUser fails", async () => {
        jest.spyOn(UserServiceMock.prototype, "getUser").mockRejectedValue(
            new Error("getUser user error")
        );

        await userControllerTest.getUser(req, res);
        expect(res.status).toBeCalledWith(500);
    });

    it("should return a user when updateUser susscefully", async () => {
        await userControllerTest.updateUser(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            ok: true,
            status: 200,
            message: "Usuário atualizado com sucesso",
            data: userResponseMock,
        });
    });

    it("should return a error when updateUser not logged", async () => {
        await userControllerTest.updateUser(reqUnauthorized, res);

        expect(res.status).toBeCalledWith(401);
    });

    it("should treat an error when updateUser fails", async () => {
        jest.spyOn(UserServiceMock.prototype, "updateUser").mockRejectedValue(
            new Error("updateUser error")
        );

        await userControllerTest.updateUser(req, res);
        expect(res.status).toBeCalledWith(500);
    });

    it("should return a deleteResult when deleteUser susscefully", async () => {
        await userControllerTest.deleteUser(req, res);
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            ok: true,
            status: 200,
            message: "Usuário deletado com sucesso",
            data: {
                raw: {
                    success: true,
                },
                affected: 1,
            },
        });
    });

    it("should return a error when deleteUser fails", async () => {
        jest.spyOn(UserServiceMock.prototype, "deleteUser").mockRejectedValue(
            new Error("deleteUser error")
        );

        await userControllerTest.deleteUser(req, res);
        expect(res.status).toBeCalledWith(500);
    });

    it("should return a error when deleteUser not logged", async () => {
        await userControllerTest.deleteUser(reqUnauthorized, res);
        expect(res.status).toBeCalledWith(401);
    });
});
