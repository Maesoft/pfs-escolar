import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsuariosService) { }

    public async registrar({ name, email, password }: CreateUsuarioDto) {
        const userFound = await this.userService.findOneByName(name)
        if (userFound) throw new UnauthorizedException("Nombre de usuario existente.")
        return await this.userService.create({
            email,
            name,
            password: await bcryptjs.hash(password,10)
        })
    }

    public async iniciarSesion(userDTO: CreateUsuarioDto) { }

}
