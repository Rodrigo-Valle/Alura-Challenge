import { ExpenseRepositoryMock } from "../mocks/repository/ExpenseRepositoryMock";
import { ExpenseService } from "../../src/service/ExpenseService";
import { UserRepositoryMock } from "../mocks/repository/UserRepositoryMock";
import { expenseCreateMock, expenseResponseMock, returnExpenseMock } from "../mocks/dto/ExpenseMock";
import { NotFoundError } from "../../src/utils/exceptions";

const expenseServiceTest = new ExpenseService(new ExpenseRepositoryMock(), new UserRepositoryMock());

describe("Expense Service", () => {
    describe("createExpense", () => {
        it("should return a expense when createExpense susscefully", async () => {
            const response = await expenseServiceTest.createExpense(expenseCreateMock, "1");
            expect(response).toEqual(expenseResponseMock);
        });

        it("should throw an error when user not found in createExpense", async () => {
            try {
                const response = await expenseServiceTest.createExpense(expenseCreateMock, "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("updateExpense", () => {
        it("should return a expense when updateExpense susscefully", async () => {
            const response = await expenseServiceTest.updateExpense("1", expenseCreateMock, "1");
            expect(response).toEqual(expenseResponseMock);
        });

        it("should return a expense when updateExpense susscefully 2", async () => {
            const response = await expenseServiceTest.updateExpense("1", {}, "1");
            expect(response).toEqual(expenseResponseMock);
        });

        it("should throw an error when expense not found in updateExpense", async () => {
            try {
                const response = await expenseServiceTest.updateExpense("2", expenseCreateMock, "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("deleteExpenses", () => {
        it("should return a DeleteResponse when deleteExpenses susscefully", async () => {
            const response = await expenseServiceTest.deleteExpense("1", "1");
            expect(response.affected).toEqual(1);
        });

        it("should throw an error when expenses not found in deleteExpense", async () => {
            try {
                const response = await expenseServiceTest.deleteExpense("2", "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("getExpense", () => {
        it("should return a expense when getExpense susscefully", async () => {
            const response = await expenseServiceTest.getExpense("1", "1");
            expect(response).toEqual(returnExpenseMock);
        });

        it("should throw an error when user not found in getExpense", async () => {
            try {
                const response = await expenseServiceTest.getExpense("2", "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("getExpenses", () => {
        it("should return an array of expense when getExpenses susscefully", async () => {
            const response = await expenseServiceTest.getExpenses("1", "");
            expect(response).toEqual([returnExpenseMock]);
        });

        it("should throw an error when expenses not found in getExpenses", async () => {
            try {
                const response = await expenseServiceTest.getExpenses("2", "");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("getExpensesByDate", () => {
        it("should return an array of expense when getExpensesByDate susscefully", async () => {
            const response = await expenseServiceTest.getExpensesByDate("1", 2022, 1);
            expect(response).toEqual([returnExpenseMock]);
        });

        it("should throw an error when expenses not found in getExpensesByDate", async () => {
            try {
                const response = await expenseServiceTest.getExpensesByDate("2", 2022, 1);
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });
});
