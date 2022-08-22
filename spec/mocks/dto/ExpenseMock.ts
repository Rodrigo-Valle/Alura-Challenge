import { IExpenseResponseDTO, ISaveExpenseDTO } from "../../../src/dto/ExpenseDTO";
import { Expense } from "../../../src/entity";
import { returnUserMock } from "./UserMock";

const expenseResponseMock: IExpenseResponseDTO = {
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
    id: "1",
};

const returnExpenseMock: Expense = {
    id: "1",
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
    user: returnUserMock,
};

const expenseCreateMock: ISaveExpenseDTO = {
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
};

export { expenseCreateMock, returnExpenseMock, expenseResponseMock };
