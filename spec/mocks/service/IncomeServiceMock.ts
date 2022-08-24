import { DeleteResult } from "typeorm";
import { ISaveIncomeDTO, IIncomeResponseDTO, IUpdateIncomeDTO } from "../../../src/dto/IncomeDTO";
import { IIncomeService } from "../../../src/service/interface/IIncomeService";
import { incomeResponseMock } from "../dto/IncomeMock";

export class IncomeServiceMock implements IIncomeService {
    public async createIncome(_createIncomeData: ISaveIncomeDTO, _userId: string): Promise<IIncomeResponseDTO> {
        return incomeResponseMock;
    }

    public async updateIncome(
        _id: string,
        _updateIncomeData: IUpdateIncomeDTO,
        _userId: string
    ): Promise<IIncomeResponseDTO> {
        return incomeResponseMock;
    }

    public async deleteIncome(_id: string, _userId: string): Promise<DeleteResult> {
        const response: DeleteResult = {
            raw: {
                success: true,
            },
            affected: 1,
        };
        return response;
    }

    public async getIncome(_id: string, _userId: string): Promise<IIncomeResponseDTO> {
        return incomeResponseMock;
    }

    public async getIncomes(_userId: string): Promise<IIncomeResponseDTO[]> {
        return [incomeResponseMock];
    }

    public async getIncomesByDate(_userId: string, _year: number, _month: number): Promise<IIncomeResponseDTO[]> {
        return [incomeResponseMock];
    }
}
