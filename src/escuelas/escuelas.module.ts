import { Module } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelasController } from './escuelas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';
import { Ciudad } from 'src/ciudad/entities/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Escuela, Ciudad])],
  controllers: [EscuelasController],
  providers: [EscuelasService],
})
export class EscuelasModule { }
