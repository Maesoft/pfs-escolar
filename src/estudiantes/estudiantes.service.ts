import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository, FindOneOptions, DeleteResult } from 'typeorm';

const msgNotFound: string = `No se encontro ningun registro con el Id. ingresado.`


@Injectable()
export class EstudiantesService {

  constructor(@InjectRepository(Estudiante)
  private readonly estudianteRepository: Repository<Estudiante>) { }

  public async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find();
  }

  public async findOne(id: number): Promise<Estudiante> {
    const criterio: FindOneOptions = { where: { idEstudiante: id } }
    const res = await this.estudianteRepository.findOne(criterio)
    if (!res) throw new NotFoundException(msgNotFound)
    return res;
  }

  public async create(estudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    try {
      const estudiante: Estudiante = await this.estudianteRepository.save(new Estudiante(estudianteDto.nombre, estudianteDto.apellido, estudianteDto.fecha_nacimiento));

      if (!estudiante) {
        throw new Error('Ocurrio un error al crear el registro.')
      } else {
        return estudiante
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR, error: `Error inesperado al crear el registro: ${error}`
      },
        HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  public async update(id: number, updatestudianteDto: UpdateEstudianteDto): Promise<Estudiante> {
    const criterio: FindOneOptions = { where: { idEstudiante: id } }
    let estudiante: Estudiante = await this.estudianteRepository.findOne(criterio)
    if (!estudiante) throw new NotFoundException(msgNotFound)
    estudiante.setNombre(updatestudianteDto.nombre)
    estudiante.setApellido(updatestudianteDto.apellido)
    estudiante.setFechaNacimiento(updatestudianteDto.fecha_nacimiento)
    return await this.estudianteRepository.save(estudiante)
  }

  public async remove(id: number): Promise<DeleteResult> {
    const criterio: FindOneOptions = { where: { idEstudiante: id } };
    let estudiante: Estudiante = await this.estudianteRepository.findOne(criterio);
    if (!estudiante) throw new NotFoundException(msgNotFound)
    return await this.estudianteRepository.delete(estudiante.getId())
  }
}
