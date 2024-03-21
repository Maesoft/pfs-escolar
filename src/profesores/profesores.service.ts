import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesore.entity';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class ProfesoresService {
  constructor(@InjectRepository(Profesor)
  private readonly repositoryProfesor:Repository<Profesor>){}

  public async findAll() {
    return await this.repositoryProfesor.find();
  }
  
  public async findOne(id: number) {
    const criterio:FindOneOptions= {where: {idProfesor:id}}
    const profesor:Profesor=await this.repositoryProfesor.findOne(criterio);
    if(!profesor) throw new NotFoundException(`No se encontro ningun profesor con el Id ${id}.`)
    return profesor;
  }

  // create(createProfesoreDto: CreateProfesoreDto) {
  //   return 'This action adds a new profesore';
  // }
  
  // update(id: number, updateProfesoreDto: UpdateProfesoreDto) {
  //   return `This action updates a #${id} profesore`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} profesore`;
  // }
}
