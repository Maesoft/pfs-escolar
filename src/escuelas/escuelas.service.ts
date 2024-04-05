import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { Repository, FindOneOptions, DeleteResult } from 'typeorm';

const msgNotFound: string = `No se encontro ningun registro con el Id. ingresado.`


@Injectable()
export class EscuelasService {

  constructor(@InjectRepository(Escuela)
  private readonly escuelaRepository: Repository<Escuela>) { }

  public async findAll(): Promise<Escuela[]> {
    return await this.escuelaRepository.find();
  }

  public async findOne(id: number): Promise<Escuela> {
    const criterio: FindOneOptions = { where: { idEscuela: id } }
    const res = await this.escuelaRepository.findOne(criterio)
    if (!res) throw new NotFoundException(msgNotFound + id)
    return res;
  }

  public async create(escuelaDto: CreateEscuelaDto): Promise<Escuela> {
    try {
      const escuela: Escuela = await this.escuelaRepository.save(new Escuela(escuelaDto.nombre, escuelaDto.direccion))
      if (!escuela) {
        throw new Error('Ocurrio un error al crear el registro.')
      } else {
        return escuela
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR, error: `Error inesperado al crear el registro: ${error}`
      },
        HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


  public async update(id: number, updateEscuelaDto: UpdateEscuelaDto): Promise<Escuela> {
    const criterio: FindOneOptions = { where: { idEscuela: id } }
    let escuela: Escuela = await this.escuelaRepository.findOne(criterio)
    if (!escuela) throw new NotFoundException(msgNotFound + id)
    escuela.setNombre(updateEscuelaDto.nombre);
    escuela.setDireccion(updateEscuelaDto.direccion);
    return await this.escuelaRepository.save(escuela)
  }

  public async remove(id: number): Promise<DeleteResult> {
    const criterio: FindOneOptions = { where: { idEscuela: id } };
    let escuela: Escuela = await this.escuelaRepository.findOne(criterio);
    if (!escuela) throw new NotFoundException(msgNotFound + id)
    return await this.escuelaRepository.delete(escuela.getId())
  }
}
