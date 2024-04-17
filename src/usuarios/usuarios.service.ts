import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private readonly repositoryUsuarios:Repository<Usuario>){}

 async create(usuarioDTO: CreateUsuarioDto) {
    return await this.repositoryUsuarios.save(usuarioDTO);
  }

  findOneByName(name:string) {
    return this.repositoryUsuarios.findOneBy({name})
  }
}
