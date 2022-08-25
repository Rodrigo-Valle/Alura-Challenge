import { ResumeController } from "../../src/controller";
import { ResumeServiceMock } from "../mocks/service/ResumeServiceMock";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { resumeResponseMock } from "../mocks/dto/ResumeMock";

const resumeControllerTest = new ResumeController(new ResumeServiceMock());

const reqWithDate = getMockReq({ id: "1", params: { id: "1", year: "2000", month: "01" } });
const { res } = getMockRes();
const reqUnauthorized = getMockReq();

describe("ResumeController", () => {
    describe("getResume", () => {
        it("should return a resumeResponse when getResume susscefully", async () => {
            await resumeControllerTest.getResume(reqWithDate, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({
                ok: true,
                status: 200,
                message: "Despesas retornadas com sucesso",
                data: resumeResponseMock,
            });
        });

        it("should return a error when getResume is not logged", async () => {
            await resumeControllerTest.getResume(reqUnauthorized, res);
            expect(res.status).toBeCalledWith(401);
        });

        it("should treat an error when getResume fails", async () => {
            jest.spyOn(ResumeServiceMock.prototype, "getResume").mockRejectedValue(new Error("Get Income error"));

            await resumeControllerTest.getResume(reqWithDate, res);
            expect(res.status).toBeCalledWith(500);
        });
    });
});
