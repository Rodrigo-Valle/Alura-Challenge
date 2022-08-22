import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { ExpenseCategory } from "./enum/ExpenseCategoryEnum";
import { User } from "./index";

@Entity()
export class Expense {
    @PrimaryColumn()
    public id: string;

    @Column({ name: "descricao" })
    public description: string;

    @Column({ name: "valor" })
    public value: number;

    @Column({ name: "data" })
    public date: Date;

    @ManyToOne(() => User, (user: User) => user.id, { onDelete: "CASCADE" })
    user: User;

    @Column({
        type: "enum",
        enum: ExpenseCategory,
        default: ExpenseCategory.Outras
    })
    category: ExpenseCategory

    constructor(description: string, value: number, date: Date, user: User, id?: string, category?: string) {
        this.description = description;
        this.value = value;
        this.date = date;
        this.user = user;
        this.id = id || uuidv4();
        this.category = <ExpenseCategory>category || ExpenseCategory.Outras;
    }
}
