import { IncomeController } from "../../src/controller";
import { IncomeServiceMock } from "../mocks/service/IncomeServiceMock";
import { incomeResponseMock } from "../mocks/dto/IncomeMock";
import { getMockReq, getMockRes } from "@jest-mock/express";

const incomeControllerTest = new IncomeController(new IncomeServiceMock());
const req = getMockReq({ id: "1", params: { id: "1" } });
const reqUnauthorized = getMockReq();
const { res } = getMockRes();

describe("IncomeController", () => {
    afterAll(() => {
        jest.resetAllMocks();
    });

    describe("CreateIncome", () => {
        it("should return a income when create susscefully", async () => {
            await incomeControllerTest.createIncome(req, res);
            expect(res.status).toBeCalledWith(201);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 201,
                message: "Receita cadastrada com sucesso",
                data: incomeResponseMock,
            });
        });

        it("should return a error when user is not logged", async () => {
            await incomeControllerTest.createIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when create fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "createIncome").mockRejectedValue(
                new Error("create income error")
            );

            await incomeControllerTest.createIncome(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("updateIncome", () => {
        it("should return a income when update susscefully", async () => {
            await incomeControllerTest.updateIncome(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Receita atualizada com sucesso",
                data: incomeResponseMock,
            });
        });

        it("should return a error when user is not logged", async () => {
            await incomeControllerTest.updateIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when updateIncome fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "updateIncome").mockRejectedValue(
                new Error("update income error")
            );

            await incomeControllerTest.updateIncome(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("deleteIncome", () => {
        it("should return a DeleteResponse when delete susscefully", async () => {
            await incomeControllerTest.deleteIncome(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Receita deletada com sucesso",
                data: {
                    raw: {
                        success: true,
                    },
                    affected: 1,
                },
            });
        });

        it("should return a error when user is not logged", async () => {
            await incomeControllerTest.deleteIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when deleteIncome fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "deleteIncome").mockRejectedValue(
                new Error("delete income error")
            );

            await incomeControllerTest.deleteIncome(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("getIncome", () => {
        it("should return a income when getIncome susscefully", async () => {
            await incomeControllerTest.getIncome(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Receita retornada com sucesso",
                data: incomeResponseMock,
            });
        });

        it("should return a error when user is not logged", async () => {
            await incomeControllerTest.getIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getIncome fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "getIncome").mockRejectedValue(
                new Error("Get Income error")
            );

            await incomeControllerTest.getIncome(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("getIncomes", () => {
        it("should return an array of income when getIncomes susscefully", async () => {
            await incomeControllerTest.getIncomes(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Receitas retornadas com sucesso",
                data: [incomeResponseMock],
            });
        });

        it("should return a error when user is not logged", async () => {
            await incomeControllerTest.getIncomes(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getIncomes fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "getIncomes").mockRejectedValue(
                new Error("Get Incomes error")
            );

            await incomeControllerTest.getIncomes(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });
});
