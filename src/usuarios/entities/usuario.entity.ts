import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number
    @Column({unique:true})
    name: string
    @Column()
    password: string
    @Column()
    email: string
    @Column({ default: "user" })
    rol: string

    constructor(name: string, password: string, email: string, rol: string) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.rol = rol;
    }

}
