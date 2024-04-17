import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  registrar(@Body() userDTO: CreateUsuarioDto) {
    return this.authService.registrar(userDTO)
  }
  @Post('login')
  iniciarSesion(@Body() userDTO: CreateUsuarioDto) {
    return this.authService.iniciarSesion(userDTO)
  }

}
