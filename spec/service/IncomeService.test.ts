import { IncomeRepositoryMock } from "../mocks/repository/IncomeRepositoryMock";
import { IncomeService } from "../../src/service/IncomeService";
import { UserRepositoryMock } from "../mocks/repository/UserRepositoryMock";
import { incomeCreateMock, incomeResponseMock } from "../mocks/dto/IncomeMock";
import { NotFoundError } from "../../src/utils/exceptions";

const incomeServiceTest = new IncomeService(
    new IncomeRepositoryMock(),
    new UserRepositoryMock()
);

describe("Income Service", () => {
    describe("CreateIncome", () => {
        it("should return a income when create susscefully", async () => {
            const response = await incomeServiceTest.createIncome(incomeCreateMock, "1");
            expect(response).toEqual(incomeResponseMock);
        });

        it("should throw an error when user not found in createIncome", async () => {
            try {
                const response = await incomeServiceTest.createIncome(
                    incomeCreateMock,
                    "2"
                );
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("GetIncome", () => {
        it("should return a income when GetIncome susscefully", async () => {
            const response = await incomeServiceTest.getIncome("1", "1");
            expect(response).toEqual(incomeResponseMock);
        });

        it("should throw an error when user not found in GetIncome", async () => {
            try {
                const response = await incomeServiceTest.getIncome("2", "2");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("GetIncomes", () => {
        it("should return an array of income when GetIncomes susscefully", async () => {
            const response = await incomeServiceTest.getIncomes("1", "");
            expect(response).toEqual([incomeResponseMock]);
        });

        it("should throw an error when incomes not found in GetIncomes", async () => {
            try {
                const response = await incomeServiceTest.getIncomes("2", "");
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("UpdateIncome", () => {
        it("should return a income when UpdateIncome susscefully", async () => {
            const response = await incomeServiceTest.updateIncome(
                "1",
                incomeCreateMock,
                "1"
            );
            expect(response).toEqual(incomeResponseMock);
        });

        it("should return a income when UpdateIncome susscefully 2", async () => {
            const response = await incomeServiceTest.updateIncome("1", {}, "1");
            expect(response).toEqual(incomeResponseMock);
        });

        it("should throw an error when income not found in UpdateIncome", async () => {
            try {
                const response = await incomeServiceTest.updateIncome(
                    "2",
                    incomeCreateMock,
                    "2"
                );
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });

    describe("DeleteIncomes", () => {
        it("should return a DeleteResponse when DeleteIncomes susscefully", async () => {
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
});
