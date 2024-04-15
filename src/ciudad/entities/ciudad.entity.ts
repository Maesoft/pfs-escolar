import { Escuela } from "src/escuelas/entities/escuela.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
@Entity('ciudades')
export class Ciudad {
    @PrimaryGeneratedColumn()
    private id:number;
    @Column()
    private nombre:string;

    @OneToMany(()=> Escuela, escuela => escuela.ciudad)
    escuela:Escuela[]

    constructor(nombre:string){
        this.nombre=nombre;
    }

    public getIdCiudad():number{
        return this.id;
    }

    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre:string):void{
        this.nombre=nombre;        
    }
}
