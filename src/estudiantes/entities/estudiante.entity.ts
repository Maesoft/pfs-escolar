import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    private idEstudiante:number;
    @Column()
    private nombre:string;
    @Column()
    private domicilio:string;
    @Column()
    private fk_id_ciudad:number;
    
}
