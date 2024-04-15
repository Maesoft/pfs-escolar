import { Escuela } from "src/escuelas/entities/escuela.entity";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Profesor } from "src/profesores/entities/profesore.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clases')
export class Clase {
    @PrimaryGeneratedColumn()
    private id: number

    @Column()
    private nombre: string

    @ManyToOne(() => Profesor, profesor => profesor.clase)
    @JoinColumn()
    profesor: Profesor

    @ManyToOne(() => Escuela, escuela => escuela.clase)
    @JoinColumn()
    escuela: Escuela

    @ManyToMany(()=> Estudiante)
    @JoinTable()
    estudiantes:Estudiante[]
    
    constructor(nombre: string) { }

    setNombre(nombre: string): void {
        this.nombre = nombre
    }

}