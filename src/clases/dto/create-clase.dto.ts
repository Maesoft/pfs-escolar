import { IsNumber, IsString } from "class-validator";
import { Escuela } from "src/escuelas/entities/escuela.entity";
import { Profesor } from "src/profesores/entities/profesore.entity";

export class CreateClaseDto {
    @IsString({ message: 'El nombre debe ser una cadena de caracteres.' })
    readonly nombre: string;
    @IsNumber()
    readonly idProfesor: Profesor;
    @IsNumber()
    readonly idEscuela:Escuela;
}
