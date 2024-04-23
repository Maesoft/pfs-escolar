import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcryptjs from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsuariosService,
        private readonly jwtService: JwtService) { }

    public async registrar({ name, email, password }: CreateUsuarioDto) {
        const userFound = await this.userService.findOneByName(name)
        if (userFound) throw new UnauthorizedException("Nombre de usuario existente.")
        await this.userService.create({
            email,
            name,
            password: await bcryptjs.hash(password, 10)
        })

        return { name, email };
    }
    public async iniciarSesion({ name, password }: LoginDTO) {
        const userFound = await this.userService.findOneByName(name)
        if (!userFound) throw new UnauthorizedException()
        const comparePass = await bcryptjs.compare(password, userFound.password)
        if (!comparePass) throw new UnauthorizedException()
        const payload = { sub: userFound.id, name: userFound.name, email: userFound.email }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
