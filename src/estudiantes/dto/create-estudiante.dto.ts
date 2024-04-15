import { IsString, IsNotEmpty } from "class-validator";


export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;
    @IsString()
    @IsNotEmpty()
    readonly apellido: string;
    @IsString()
    @IsNotEmpty()
    readonly fecha_nacimiento: string;
}
