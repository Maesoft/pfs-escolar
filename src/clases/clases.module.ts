import { Module } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './entities/clase.entity';
import { Escuela } from 'src/escuelas/entities/escuela.entity';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clase, Escuela, Estudiante])],
  controllers: [ClasesController],
  providers: [ClasesService],
})
export class ClasesModule {}
