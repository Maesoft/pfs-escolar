import { IsString, MinLength } from "class-validator"

export class LoginDTO{
    @IsString()
    @MinLength(3)
    name:string
    @IsString()
    @MinLength(3)
    password:string
}