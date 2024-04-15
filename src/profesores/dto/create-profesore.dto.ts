import { IsString} from 'class-validator';

export class CreateProfesoreDto {
    @IsString({ message: 'El nombre debe ser una cadena de caracteres.' })
    readonly nombre:string;
    @IsString({ message: 'El nombre debe ser una cadena de caracteres.' })
    readonly apellido:string;
}
