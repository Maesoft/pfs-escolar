import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    private idEstudiante:number;
    @Column()
    private nombre:string;
    @Column()
    private domicilio:string;
    // @Column()
    // private fk_id_ciudad:number;

    constructor(nombre:string, domicilo:string){
        this.nombre=nombre;
        this.domicilio=domicilo;
    }
    public getId():number{
        return this.idEstudiante
    }
    public getNombre():string{
        return this.nombre
    }
    public getAdress():string{
        return this.domicilio
    }
    public setName(nombre:string):void{
        this.nombre=nombre;
    }
    public setAdress(domicilio:string):void{
        this.domicilio=domicilio;
    }


}
