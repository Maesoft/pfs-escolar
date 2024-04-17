import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    private id: number
    @Column({unique:true})
    private name: string
    @Column()
    private password: string
    @Column()
    private email: string
    @Column({ default: "user" })
    private rol: string

    constructor(name: string, password: string, email: string, rol: string) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.rol = rol;
    }


}
