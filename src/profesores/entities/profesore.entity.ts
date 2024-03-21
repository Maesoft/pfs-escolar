import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profesores')
export class Profesor {
    @PrimaryGeneratedColumn()
    private idProfesor:number;
    @Column()
    private nombre:string;
    @Column()
    private apellido:string;

    constructor(nombre:string,apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    public setApellido(apellido:string):void{
        this.apellido=apellido;
    }
    public getId():number{
        return this.idProfesor;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    
}
