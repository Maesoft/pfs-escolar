import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesore.entity';
import { Repository, FindOneOptions } from 'typeorm';

const msgNotFound: string = `No se encontro ningun registro con el Id. ingresado.`

@Injectable()
export class ProfesoresService {
  constructor(@InjectRepository(Profesor)
  private readonly repositoryProfesor: Repository<Profesor>) { }

  public async findAll() {
    return await this.repositoryProfesor.find();
  }

  public async findOne(id: number) {
    const criterio: FindOneOptions = { where: { idProfesor: id } }
    const profesor: Profesor = await this.repositoryProfesor.findOne(criterio);
    if (!profesor) throw new NotFoundException(msgNotFound)
    return profesor;
  }

  public async create(createProfesoreDto: CreateProfesoreDto): Promise<Profesor> {
    try {
      const profesor: Profesor = await this.repositoryProfesor.save(new Profesor(createProfesoreDto.nombre, createProfesoreDto.apellido));
      if (!profesor) {
        throw new Error('Ocurrio un error al crear el registro.')
      } else {
        return profesor
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR, error: `Error inesperado al crear el registro: ${error}`
      },
        HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  public async update(id: number, updateProfesoreDto: UpdateProfesoreDto) {
    const criterio: FindOneOptions = { where: { idProfesor: id } }
    let profesor: Profesor = await this.repositoryProfesor.findOne(criterio)
    if (!profesor) throw new NotFoundException(msgNotFound)
    profesor.setNombre(updateProfesoreDto.nombre)
    profesor.setApellido(updateProfesoreDto.apellido)
    return await this.repositoryProfesor.save(profesor)

  }

  public async remove(id: number) {
    const criterio: FindOneOptions = { where: { idProfesor: id } };
    let profesor: Profesor = await this.repositoryProfesor.findOne(criterio);
    if (!profesor) throw new NotFoundException(msgNotFound)
    return await this.repositoryProfesor.delete(profesor.getId())
  }
}
