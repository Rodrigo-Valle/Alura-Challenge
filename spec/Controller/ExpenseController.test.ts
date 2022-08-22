import { ExpenseController } from "../../src/controller";
import { ExpenseServiceMock } from "../mocks/service/ExpenseServiceMock";
import { expenseResponseMock } from "../mocks/dto/ExpenseMock";
import { getMockReq, getMockRes } from "@jest-mock/express";

const expenseControllerTest = new ExpenseController(new ExpenseServiceMock());
const req = getMockReq({ id: "1", params: { id: "1" } });
const reqUnauthorized = getMockReq();
const { res } = getMockRes();

describe("ExpenseController", () => {
    afterAll(() => {
        jest.resetAllMocks();
    });

    describe("CreateExpense", () => {
        it("should return a Expense when create susscefully", async () => {
            await expenseControllerTest.createExpense(req, res);
            expect(res.status).toBeCalledWith(201);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 201,
                message: "Despesa cadastrada com sucesso",
                data: expenseResponseMock,
            });
        });

        it("should return a error when user is not logged", async () => {
            await expenseControllerTest.createExpense(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when create fails", async () => {
            jest.spyOn(ExpenseServiceMock.prototype, "createExpense").mockRejectedValue(
                new Error("create Expense error")
            );

            await expenseControllerTest.createExpense(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("updateExpense", () => {
        it("should return a Expense when update susscefully", async () => {
            await expenseControllerTest.updateExpense(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Despesa atualizada com sucesso",
                data: expenseResponseMock,
            });
        });

        it("should return a error when user is not logged", async () => {
            await expenseControllerTest.updateExpense(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when updateExpense fails", async () => {
            jest.spyOn(ExpenseServiceMock.prototype, "updateExpense").mockRejectedValue(
                new Error("update Expense error")
            );

            await expenseControllerTest.updateExpense(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("deleteExpense", () => {
        it("should return a DeleteResponse when delete susscefully", async () => {
            await expenseControllerTest.deleteExpense(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Despesa deletada com sucesso",
                data: {
                    raw: {
                        success: true,
                    },
                    affected: 1,
                },
            });
        });

        it("should return a error when user is not logged", async () => {
            await expenseControllerTest.deleteExpense(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when deleteExpense fails", async () => {
            jest.spyOn(ExpenseServiceMock.prototype, "deleteExpense").mockRejectedValue(
                new Error("delete Expense error")
            );

            await expenseControllerTest.deleteExpense(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("getExpense", () => {
        it("should return a Expense when getExpense susscefully", async () => {
            await expenseControllerTest.getExpense(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Despesa retornada com sucesso",
                data: expenseResponseMock,
            });
        });

        it("should return a error when user is not logged", async () => {
            await expenseControllerTest.getExpense(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getExpense fails", async () => {
            jest.spyOn(ExpenseServiceMock.prototype, "getExpense").mockRejectedValue(
                new Error("Get Expense error")
            );

            await expenseControllerTest.getExpense(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });

    describe("getExpenses", () => {
        it("should return an array of Expense when getExpenses susscefully", async () => {
            await expenseControllerTest.getExpenses(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Despesas retornadas com sucesso",
                data: [expenseResponseMock],
            });
        });

        it("should return a error when user is not logged", async () => {
            await expenseControllerTest.getExpenses(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getExpenses fails", async () => {
            jest.spyOn(ExpenseServiceMock.prototype, "getExpenses").mockRejectedValue(
                new Error("Get Expenses error")
            );

            await expenseControllerTest.getExpenses(req, res);
            expect(res.status).toBeCalledWith(500);
        });
    });
});
