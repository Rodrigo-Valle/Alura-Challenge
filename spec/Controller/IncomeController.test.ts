import { IncomeController } from "../../src/controller";
import { IncomeServiceMock } from "../mocks/service/IncomeServiceMock";
import { incomeResponseMock } from "../mocks/dto/IncomeMock";
import { getMockReq, getMockRes } from "@jest-mock/express";

const incomeControllerTest = new IncomeController(new IncomeServiceMock());
const req = getMockReq({ id: "1", params: { id: "1" } });
const reqWithQuery = getMockReq({ id: "1", params: { id: "1" }, query: { description: "test" } });
const reqWithDate = getMockReq({ id: "1", params: { id: "1", year: "2000", month: "01" } });
const reqUnauthorized = getMockReq();
const { res } = getMockRes();

describe("IncomeController", () => {
    afterAll(() => {
        jest.resetAllMocks();
    });

    describe("CreateIncome", () => {
        it("should return a income when CreateIncome susscefully", async () => {
            await incomeControllerTest.createIncome(req, res);
            expect(res.status).toBeCalledWith(201);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 201,
                message: "Receita cadastrada com sucesso",
                data: incomeResponseMock,
            });
        });

        it("should return a error when CreateIncome is not logged", async () => {
            await incomeControllerTest.createIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when CreateIncome fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "createIncome").mockRejectedValue(new Error("create income error"));

            await incomeControllerTest.createIncome(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("updateIncome", () => {
        it("should return a income when updateIncome susscefully", async () => {
            await incomeControllerTest.updateIncome(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Receita atualizada com sucesso",
                data: incomeResponseMock,
            });
        });

        it("should return a error when updateIncome is not logged", async () => {
            await incomeControllerTest.updateIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when updateIncome fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "updateIncome").mockRejectedValue(new Error("update income error"));

            await incomeControllerTest.updateIncome(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("deleteIncome", () => {
        it("should return a DeleteResponse when deleteIncome susscefully", async () => {
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

        it("should return a error when deleteIncome is not logged", async () => {
            await incomeControllerTest.deleteIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when deleteIncome fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "deleteIncome").mockRejectedValue(new Error("delete income error"));

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

        it("should return a error when getIncome is not logged", async () => {
            await incomeControllerTest.getIncome(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getIncome fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "getIncome").mockRejectedValue(new Error("Get Income error"));

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

        it("should return an array of income when getIncomes susscefully with query", async () => {
            await incomeControllerTest.getIncomes(reqWithQuery, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Receitas retornadas com sucesso",
                data: [incomeResponseMock],
            });
        });

        it("should return a error when getIncomes is not logged", async () => {
            await incomeControllerTest.getIncomes(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getIncomes fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "getIncomes").mockRejectedValue(new Error("Get Incomes error"));

            await incomeControllerTest.getIncomes(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("getIncomesByDate", () => {
        it("should return an array of income when getIncomesByDate susscefully", async () => {
            await incomeControllerTest.getIncomesByDate(reqWithDate, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Receitas retornadas com sucesso",
                data: [incomeResponseMock],
            });
        });

        it("should return a error when getIncomesByDate is not logged", async () => {
            await incomeControllerTest.getIncomesByDate(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getIncomesByDate fails", async () => {
            jest.spyOn(IncomeServiceMock.prototype, "getIncomesByDate").mockRejectedValue(
                new Error("Get Incomes error")
            );

            await incomeControllerTest.getIncomesByDate(reqWithDate, res);
            expect(res.status).toBeCalledWith(500);
        });
    });
});
