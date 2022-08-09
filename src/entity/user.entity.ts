import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number | undefined;

    @Column()
    public cpf: string;

    @Column()
    public nome: string;

    @Column()
    public email: string;

    @Column()
    public senha:string;

    constructor(id: number | undefined, cpf: string, nome: string, email: string, senha: string) {
        this.id = id
        this.cpf = cpf,
        this.nome = nome,
        this.email = email,
        this.senha = senha
    }
}