import { DeleteResult } from "typeorm";
import { ISaveIncomeDTO } from "../../../src/dto/IncomeDTO";
import { Income } from "../../../src/entity";
import { IIncomeRepository } from "../../../src/repository/interface/IIncomeRepository";
import { returnIncomeMock } from "../dto/IncomeMock";

export class IncomeRepositoryMock implements IIncomeRepository {
    public async saveIncome(_Income: ISaveIncomeDTO): Promise<Income> {
        return returnIncomeMock;
    }

    public async deleteIncome(id: string, _userId: string): Promise<DeleteResult> {
        const deleteResult = {} as unknown as DeleteResult;
        if (id !== "1") {
            deleteResult.affected = 0;
            return deleteResult;
        }

        deleteResult.affected = 1;
        return deleteResult;
    }

    public async getIncomeById(id: string, _userId: string): Promise<Income | null> {
        if (id !== "1") return null;

        return returnIncomeMock;
    }

    public async getIncomesById(id: string): Promise<Income[] | null> {
        if (id !== "1") return null;

        return [returnIncomeMock];
    }

    public async getIncomesByDate(id: string, _year: number, _month: number): Promise<Income[] | null> {
        if (id !== "1") return null;

        return [returnIncomeMock];
    }
}
