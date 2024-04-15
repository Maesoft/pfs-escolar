import { Clase } from "src/clases/entities/clase.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('profesores')
export class Profesor {
    @PrimaryGeneratedColumn()
    private id:number;
    @Column()
    private nombre:string;
    @Column()
    private apellido:string;
    @OneToMany(()=>Clase, clase => clase.profesor)
    clase:Clase[]

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
        return this.id;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    
}
