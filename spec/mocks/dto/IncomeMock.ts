import { IIncomeResponseDTO, ISaveIncomeDTO } from "../../../src/dto/IncomeDTO";
import { Income } from "../../../src/entity";
import { returnUserMock } from "./UserMock";

const incomeResponseMock: IIncomeResponseDTO = {
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
    id: "1",
};

const returnIncomeMock: Income = {
    id: "1",
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
    user: returnUserMock,
};

const incomeCreateMock: ISaveIncomeDTO = {
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
};

export { incomeResponseMock, returnIncomeMock, incomeCreateMock };
