import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Clase } from './entities/clase.entity';
import { Escuela } from 'src/escuelas/entities/escuela.entity';
import { Profesor } from 'src/profesores/entities/profesore.entity';

const msgNotFound: string = `No se encontro ningun registro con el Id. ingresado.`

@Injectable()
export class ClasesService {
  constructor(@InjectRepository(Clase) private readonly claseRepository: Repository<Clase>) { }

  public async create(createClaseDto: CreateClaseDto): Promise<Clase> {
   
    try {
      const clase: Clase = await this.claseRepository.save(new Clase(createClaseDto.nombre))
      if (!clase) throw new NotFoundException(msgNotFound)
      return clase
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR, error: `Error inesperado al crear el registro: ${error}`
      },
        HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  public async findAll() {
    return await this.claseRepository.find({relations:['escuelas','profesores','estudiantes']})
  }

  public async findOne(id: number): Promise<Clase> {
    const criterio: FindOneOptions = { relations:['escuelas','profesore'],where: {idClase:id } }
    return await this.claseRepository.findOne(criterio)
  }

  public async update(id: number, updateClaseDto: UpdateClaseDto):Promise<Clase> {
    const criterio:FindOneOptions={ where: {idClase:id}}
    let clase:Clase= await this.claseRepository.findOne(criterio)
    clase.escuela=updateClaseDto.idEscuela
    clase.profesor=updateClaseDto.idProfesor
    return await this.claseRepository.save(clase)
  }

  remove(id: number) {
    return `This action removes a #${id} clase`;
  }

}
