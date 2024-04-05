import { Body, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { DeleteResult, FindOneOptions, Repository } from 'typeorm';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';

@Injectable()
export class CiudadService {
    constructor(@InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>) { }

    public async create(ciudadDto: CreateCiudadDto): Promise<Ciudad> {
        try {
            const ciudad: Ciudad = await this.ciudadRepository.save(new Ciudad(ciudadDto.nombre))
            if (!ciudad) {
                throw new Error('Ocurrio un error al crear el registro.')
            } else {
                return ciudad
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR, error: `Error inesperado al crear el registro: ${error}`
            },
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    public async getAll(): Promise<Ciudad[]> {
        return await this.ciudadRepository.find()
    }

    public async getById(id: number): Promise<Ciudad> {
        const criterio: FindOneOptions = { where: { idCiudad: id } }
        const ciudad: Ciudad = await this.ciudadRepository.findOne(criterio);
        if (!ciudad) throw new NotFoundException(`No se encontro la ciudad con el Id ${id}`)
        return ciudad;
    }
    public async update(id: number, updateCiudadDto: UpdateCiudadDto): Promise<Ciudad> {
        const criterio: FindOneOptions = { where: { idCiudad: id } };
        let ciudad: Ciudad = await this.ciudadRepository.findOne(criterio);
        if (!ciudad) throw new NotFoundException(`No se encontro la ciudad con el Id ${id}`)
        ciudad.setNombre(updateCiudadDto.nombre);
        ciudad = await this.ciudadRepository.save(ciudad);
        return ciudad
    }
    public async remove(id: number): Promise<DeleteResult> {
        const criterio: FindOneOptions = { where: { idCiudad: id } };
        let ciudad: Ciudad = await this.ciudadRepository.findOne(criterio);
        if (!ciudad) throw new NotFoundException(`No se encontro la ciudad con el Id ${id}`)
        return await this.ciudadRepository.delete(ciudad.getIdCiudad())
    }
}