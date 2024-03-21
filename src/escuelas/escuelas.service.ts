import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class EscuelasService {
  constructor(@InjectRepository(Escuela) 
    private readonly escuelaRepository:Repository<Escuela>){}

    public async findAll():Promise<Escuela[]>{
      return await this.escuelaRepository.find();
    }
  
    public async findOne(id: number):Promise<Escuela> {
      const criterio:FindOneOptions={where : {idEscuela: id}}
      const res = await this.escuelaRepository.findOne(criterio)
      if(!res)throw new NotFoundException(`No se encontro ninguna escuela con el Id ${id}.`) 
      return res;  
    }

  // create(createEscuelaDto: CreateEscuelaDto) {
  //   return 'This action adds a new escuela';
  // }


  // update(id: number, updateEscuelaDto: UpdateEscuelaDto) {
  //   return `This action updates a #${id} escuela`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} escuela`;
  // }
}
