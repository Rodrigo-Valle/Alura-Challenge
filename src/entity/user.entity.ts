import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Expense } from "./expenses.entity";
import { Income } from "./income.entity";

@Entity()
export class User {
    @PrimaryColumn()
    public id: string;

    @Column({ unique: true })
    public cpf: string;

    @Column({ name: "nome" })
    public name: string;

    @Column({ unique: true })
    public email: string;

    @Column({ name: "senha" })
    public password: string;

    @OneToMany(() => Income, (income) => income.user)
    public income?: Income[];

    @OneToMany(() => Expense, (expense) => expense.user)
    public expense?: Expense[];

    constructor(cpf: string, name: string, email: string, password: string, id?: string) {
        this.cpf = cpf;
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id || uuidv4();
    }
}
