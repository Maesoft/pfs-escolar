import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports:[UsuariosModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
