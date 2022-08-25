import { IResumeResponseDTO } from "../../../src/dto/ResumeDTO";
import { IResumeService } from "../../../src/service/interface/IResumeService";
import { resumeResponseMock } from "../dto/ResumeMock";

export class ResumeServiceMock implements IResumeService {
    public async getResume(_id: string, _year: number, _month: number): Promise<IResumeResponseDTO> {
        return resumeResponseMock;
    }
}
