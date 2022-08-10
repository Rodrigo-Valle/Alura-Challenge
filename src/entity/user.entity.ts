import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public cpf: string;

    @Column({name: "nome"})
    public name: string;

    @Column()
    public email: string;

    @Column({name: "senha"})
    public password:string;

    constructor(id: number | undefined, cpf: string, name: string, email: string, password: string) {
        this.id = id
        this.cpf = cpf
        this.name = name
        this.email = email
        this.password = password
    }
}