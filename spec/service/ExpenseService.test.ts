import { ExpenseRepositoryMock } from "../mocks/repository/ExpenseRepositoryMock";
import { ExpenseService } from "../../src/service/ExpenseService";
import { UserRepositoryMock } from "../mocks/repository/UserRepositoryMock";
import { expenseCreateMock, expenseResponseMock } from "../mocks/dto/ExpenseMock";
import { NotFoundError } from "../../src/utils/exceptions";

const expenseServiceTest = new ExpenseService(
    new ExpenseRepositoryMock(),
    new UserRepositoryMock()
);

describe("Expense Service", () => {
    describe("CreateExpense", () => {
        it("should return a expense when create susscefully", async () => {
            const response = await expenseServiceTest.createExpense(
                expenseCreateMock,
                "1"
            );
            expect(response).toEqual(expenseResponseMock);
        });

        it("should throw an error when user not found in createExpense", async () => {
            try {
                const response = await expenseServiceTest.createExpense(
                    expenseCreateMock,
                    "2"
                );
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("GetExpense", () => {
        it("should return a expense when GetExpense susscefully", async () => {
            const response = await expenseServiceTest.getExpense("1", "1");
            expect(response).toEqual(expenseResponseMock);
        });

        it("should throw an error when user not found in GetExpense", async () => {
            try {
                const response = await expenseServiceTest.getExpense("2", "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("GetExpenses", () => {
        it("should return an array of expense when GetExpenses susscefully", async () => {
            const response = await expenseServiceTest.getExpenses("1");
            expect(response).toEqual([expenseResponseMock]);
        });

        it("should throw an error when expenses not found in GetExpenses", async () => {
            try {
                const response = await expenseServiceTest.getExpenses("2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("UpdateExpense", () => {
        it("should return a expense when UpdateExpense susscefully", async () => {
            const response = await expenseServiceTest.updateExpense(
                "1",
                expenseCreateMock,
                "1"
            );
            expect(response).toEqual(expenseResponseMock);
        });

        it("should return a expense when UpdateExpense susscefully 2", async () => {
            const response = await expenseServiceTest.updateExpense("1", {}, "1");
            expect(response).toEqual(expenseResponseMock);
        });

        it("should throw an error when expense not found in UpdateExpense", async () => {
            try {
                const response = await expenseServiceTest.updateExpense(
                    "2",
                    expenseCreateMock,
                    "2"
                );
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("DeleteExpenses", () => {
        it("should return a DeleteResponse when DeleteExpenses susscefully", async () => {
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
});
