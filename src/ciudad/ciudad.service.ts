import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CiudadService { 
    constructor(@InjectRepository(Ciudad) 
    private readonly ciudadRepository:Repository<Ciudad>){}

    public async getAll():Promise<Ciudad[]>{
        return await this.ciudadRepository.find()
    }

    public async getById(id : number) : Promise<Ciudad> {
      const criterio : FindOneOptions = { where: { idCiudad: id } }
      let ciudad : Ciudad = await this.ciudadRepository.findOne( criterio );
      if (!ciudad)throw new NotFoundException(`No se encontro la ciudad con el Id´${id}`) 
      return ciudad;
}

}
