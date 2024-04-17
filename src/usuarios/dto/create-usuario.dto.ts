import { IsEmail, IsString, IsStrongPassword, Length, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @Length(3)
    name: string;
    @IsString()
    @MinLength(3)
    password: string;
    @IsEmail()
    email: string;
}
