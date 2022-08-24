import { User } from "../entity";
import { ExpenseCategory } from "../entity/enum/ExpenseCategoryEnum";

interface IExpenseResponseDTO {
    id: string;
    description: string;
    value: number;
    date: Date;
    category: string;
}

interface ISaveExpenseDTO {
    description: string;
    value: number;
    date: Date;
    user?: User;
    id?: string;
    category?: ExpenseCategory;
}

interface IUpdateExpenseDTO {
    description?: string;
    value?: number;
    date?: Date;
    category?: ExpenseCategory;
}

export { ISaveExpenseDTO, IExpenseResponseDTO, IUpdateExpenseDTO };
