import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    private idEstudiante:number;
    @Column()
    private nombre:string;
    @Column()
    private apellido:string;
    @Column()
    private fecha_nacimiento:string;
    // @Column()
    // private fk_id_ciudad:number;

    constructor(nombre:string, apellido:string, fecha_nacimiento:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha_nacimiento=fecha_nacimiento;
    }
    public getId():number{
        return this.idEstudiante;
    }
    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setApellido(apellido:string):void{
        this.apellido=apellido;
    }
    public getApellido():string{
        return this.apellido;
    }
    public getFechaNacimiento():string{
        return this.fecha_nacimiento;
    }
    public setFechaNacimiento(fecha_nacimiento:string):void{
        this.fecha_nacimiento=fecha_nacimiento;
    }


}
