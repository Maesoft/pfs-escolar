import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('escuelas')
export class Escuela {
    @PrimaryGeneratedColumn()
    private idEscuela: number

    @Column()
    private nombre: string

    @Column()
    private direccion: string

    @OneToOne(() => Ciudad)
    @JoinColumn()
    fk_: Ciudad
    
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
        return this.idEscuela;
    }
}
