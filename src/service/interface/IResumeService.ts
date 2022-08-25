import { IResumeResponseDTO } from "../../dto/ResumeDTO";

export interface IResumeService {
    getResume(id: string, year: number, month: number): Promise<IResumeResponseDTO>;
}
