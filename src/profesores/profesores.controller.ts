import { Controller, Get, Post, Body,  Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) { }

  @Get()
  findAll() {
    return this.profesoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesoresService.findOne(+id);
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createProfesoreDto: CreateProfesoreDto) {
    return this.profesoresService.create(createProfesoreDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfesoreDto: UpdateProfesoreDto) {
    return this.profesoresService.update(+id, updateProfesoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesoresService.remove(+id);
  }
}
