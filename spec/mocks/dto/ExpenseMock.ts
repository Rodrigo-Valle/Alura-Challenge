import { IExpenseResponseDTO, ISaveExpenseDTO } from "../../../src/dto/ExpenseDTO";
import { Expense } from "../../../src/entity";
import { ExpenseCategory } from "../../../src/entity/enum/ExpenseCategoryEnum";
import { returnUserMock } from "./UserMock";

const expenseResponseMock: IExpenseResponseDTO = {
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
    id: "1",
    category: ExpenseCategory.Outras
};

const returnExpenseMock: Expense = {
    id: "1",
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
    user: returnUserMock,
    category: ExpenseCategory.Outras
};

const expenseCreateMock: ISaveExpenseDTO = {
    description: "test",
    value: 1000,
    date: new Date(2000, 1, 1),
    category: ExpenseCategory.Outras
};

export { expenseCreateMock, returnExpenseMock, expenseResponseMock };
