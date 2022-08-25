import { IncomeRepositoryMock } from "../mocks/repository/IncomeRepositoryMock";
import { IncomeService } from "../../src/service/IncomeService";
import { UserRepositoryMock } from "../mocks/repository/UserRepositoryMock";
import { incomeCreateMock, incomeResponseMock, returnIncomeMock } from "../mocks/dto/IncomeMock";
import { NotFoundError } from "../../src/utils/exceptions";

const incomeServiceTest = new IncomeService(new IncomeRepositoryMock(), new UserRepositoryMock());

describe("Income Service", () => {
    describe("createIncome", () => {
        it("should return a income when createIncome susscefully", async () => {
            const response = await incomeServiceTest.createIncome(incomeCreateMock, "1");
            expect(response).toEqual(incomeResponseMock);
        });

        it("should throw an error when user not found in createIncome", async () => {
            try {
                const response = await incomeServiceTest.createIncome(incomeCreateMock, "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("updateIncome", () => {
        it("should return a income when updateIncome susscefully", async () => {
            const response = await incomeServiceTest.updateIncome("1", incomeCreateMock, "1");
            expect(response).toEqual(incomeResponseMock);
        });

        it("should return a income when updateIncome susscefully 2", async () => {
            const response = await incomeServiceTest.updateIncome("1", {}, "1");
            expect(response).toEqual(incomeResponseMock);
        });

        it("should throw an error when income not found in updateIncome", async () => {
            try {
                const response = await incomeServiceTest.updateIncome("2", incomeCreateMock, "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("deleteIncome", () => {
        it("should return a DeleteResponse when deleteIncome susscefully", async () => {
            const response = await incomeServiceTest.deleteIncome("1", "1");
            expect(response.affected).toEqual(1);
        });

        it("should throw an error when incomes not found in deleteIncome", async () => {
            try {
                const response = await incomeServiceTest.deleteIncome("2", "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("getIncome", () => {
        it("should return a income when getIncome susscefully", async () => {
            const response = await incomeServiceTest.getIncome("1", "1");
            expect(response).toEqual(returnIncomeMock);
        });

        it("should throw an error when user not found in getIncome", async () => {
            try {
                const response = await incomeServiceTest.getIncome("2", "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("getIncomes", () => {
        it("should return an array of income when getIncomes susscefully", async () => {
            const response = await incomeServiceTest.getIncomes("1", "");
            expect(response).toEqual([returnIncomeMock]);
        });

        it("should throw an error when incomes not found in getIncomes", async () => {
            try {
                const response = await incomeServiceTest.getIncomes("2", "");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("getIncomesByDate", () => {
        it("should return an array of income when getIncomesByDate susscefully", async () => {
            const response = await incomeServiceTest.getIncomesByDate("1", 2022, 1);
            expect(response).toEqual([returnIncomeMock]);
        });

        it("should throw an error when incomes not found in getIncomesByDate", async () => {
            try {
                const response = await incomeServiceTest.getIncomesByDate("2", 2022, 1);
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });
});
