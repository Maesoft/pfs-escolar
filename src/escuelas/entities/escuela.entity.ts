import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Clase } from "src/clases/entities/clase.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('escuelas')
export class Escuela {
    @PrimaryGeneratedColumn()
    private id: number

    @Column()
    private nombre: string

    @Column()
    private direccion: string

    @ManyToOne(() => Ciudad, ciudad => ciudad.escuela)
    @JoinColumn()
    ciudad: Ciudad

    @OneToMany(()=>Clase, clase => clase)
    clase:Clase[]
    
    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getDireccion(): string {
        return this.direccion;
    }
    public getId(): number {
        return this.id;
    }
}
