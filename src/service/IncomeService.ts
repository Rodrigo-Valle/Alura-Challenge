import { DeleteResult } from "typeorm";
import { ISaveIncomeDTO, IIncomeResponseDTO, IUpdateIncomeDTO } from "../dto/IncomeDTO";
import { IIncomeRepository } from "../repository/interface/IIncomeRepository";
import { IUserRepository } from "../repository/interface/IUserRepository";
import { NotFoundError } from "../utils/exceptions";
import { IIncomeService } from "./interface/IIncomeService";
import { v4 as uuid } from "uuid";

export class IncomeService implements IIncomeService {
    private readonly incomeRepository: IIncomeRepository;
    private readonly userRespository: IUserRepository;

    constructor(incomeRepository: IIncomeRepository, userRespository: IUserRepository) {
        this.incomeRepository = incomeRepository;
        this.userRespository = userRespository;
    }

    public async createIncome(createIncomeData: ISaveIncomeDTO, userId: string): Promise<IIncomeResponseDTO> {
        const user = await this.userRespository.getUserById(userId);

        if (!user) throw new NotFoundError("Usuário não localizado");
        createIncomeData.user = user;
        createIncomeData.id = uuid();

        const result = await this.incomeRepository.saveIncome(createIncomeData);

        const reponse: IIncomeResponseDTO = {
            id: result.id,
            description: result.description,
            value: result.value,
            date: result.date,
        };

        return reponse;
    }

    public async updateIncome(
        id: string,
        updateIncomeData: IUpdateIncomeDTO,
        userId: string
    ): Promise<IIncomeResponseDTO> {
        const income = await this.incomeRepository.getIncomeById(id, userId);

        if (!income) throw new NotFoundError("Receita não localizada");

        const updatedIncome: ISaveIncomeDTO = {
            description: updateIncomeData.description ? updateIncomeData.description : income.description,
            value: updateIncomeData.value ? updateIncomeData.value : income.value,
            date: updateIncomeData.date ? updateIncomeData.date : income.date,
            id: income.id,
            user: income.user,
        };

        const result = await this.incomeRepository.saveIncome(updatedIncome);

        const reponse: IIncomeResponseDTO = {
            id: result.id,
            description: result.description,
            value: result.value,
            date: result.date,
        };

        return reponse;
    }

    public async deleteIncome(id: string, userId: string): Promise<DeleteResult> {
        const result = await this.incomeRepository.deleteIncome(id, userId);

        if (result.affected === null || result.affected === undefined || result.affected < 1)
            throw new NotFoundError("Receita não localizada");

        return result;
    }

    public async getIncome(id: string, userId: string): Promise<IIncomeResponseDTO> {
        const result = await this.incomeRepository.getIncomeById(id, userId);

        if (!result) throw new NotFoundError("Receita não localizada");

        return result;
    }

    public async getIncomes(userId: string, description: string): Promise<IIncomeResponseDTO[]> {
        const result = await this.incomeRepository.getIncomesById(userId, description);

        if (!result) throw new NotFoundError("Receitas não localizadas");

        return result;
    }

    public async getIncomesByDate(userId: string, year: number, month: number): Promise<IIncomeResponseDTO[]> {
        const result = await this.incomeRepository.getIncomesByDate(userId, year, month);

        if (!result) throw new NotFoundError("Receitas não localizadas");

        return result;
    }
}
