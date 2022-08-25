import { IResumeResponseDTO } from "../../../src/dto/ResumeDTO";

const resumeResponseMock: IResumeResponseDTO = {
    balance: 0,
    totalExpenses: 1000,
    totalIncomes: 1000,
    expensesByCategory: {
        outras: {
            total: 1000,
        },
    },
};

export { resumeResponseMock };
