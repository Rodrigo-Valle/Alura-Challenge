import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class User {
    @PrimaryColumn()
    public id: string;

    @Column()
    public cpf: string;

    @Column({ name: "nome" })
    public name: string;

    @Column()
    public email: string;

    @Column({ name: "senha" })
    public password: string;

    constructor(cpf: string, name: string, email: string, password: string, id?: string) {
        this.cpf = cpf;
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id || uuidv4();
    }
}
