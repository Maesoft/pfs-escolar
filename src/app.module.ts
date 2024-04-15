import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { ClasesModule } from './clases/clases.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "escolar",
    entities: ["dist/**/**.entity{.ts,.js}"],
    synchronize: true
}),
 CiudadModule,
 EstudiantesModule,
 EscuelasModule,
 ProfesoresModule,
 ClasesModule
 ],

})


export class AppModule {}
