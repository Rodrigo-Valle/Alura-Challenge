import { ResumeService } from "../../src/service/ResumeService";
import { IncomeRepositoryMock } from "../mocks/repository/IncomeRepositoryMock";
import { ExpenseRepositoryMock } from "../mocks/repository/ExpenseRepositoryMock";
import { NotFoundError } from "../../src/utils/exceptions";
import { resumeResponseMock } from "../mocks/dto/ResumeMock";

const resumeServiceTest = new ResumeService(new IncomeRepositoryMock(), new ExpenseRepositoryMock());

describe("ResumeService Service", () => {
    describe("getResume", () => {
        it("should return an resumeResponse when getResume susscefully", async () => {
            const response = await resumeServiceTest.getResume("1", 2022, 1);
            expect(response).toEqual(resumeResponseMock);
        });

        it("should throw an error when user not found in getIncomesByDate", async () => {
            try {
                const response = await resumeServiceTest.getResume("2", 2022, 1);
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundError);
            }
        });
    });
});
