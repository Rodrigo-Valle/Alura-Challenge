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
        createIncomeData.id = uuid()

        const result = await this.incomeRepository.saveIncome(createIncomeData);

        const reponse: IIncomeResponseDTO = {
            id: result.id,
            description: result.description,
            value: result.value,
            date: result.date,
        };

        return reponse;

    }
    getIncomes(userId: string): Promise<IIncomeResponseDTO[]> {
        throw new Error("Method not implemented.");
    }
    getIncome(id: string, userId: string): Promise<IIncomeResponseDTO> {
        throw new Error("Method not implemented.");
    }
    updateIncome(id: string, updateIncomeData: IUpdateIncomeDTO): Promise<IIncomeResponseDTO> {
        throw new Error("Method not implemented.");
    }
    deleteIncome(id: string): Promise<DeleteResult> {
        throw new Error("Method not implemented.");
    }
}
