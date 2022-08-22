import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "./index";

@Entity()
export class Income {
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

    constructor(description: string, value: number, date: Date, user: User, id?: string) {
        this.description = description;
        this.value = value;
        this.date = date;
        this.user = user;
        this.id = id || uuidv4();
    }
}
