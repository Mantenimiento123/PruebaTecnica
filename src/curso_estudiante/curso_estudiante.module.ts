import { Module } from '@nestjs/common';
import { CursoEstudianteController } from './curso_estudiante.controller.js';
import { CursoEstudianteService } from './curso_estudiante.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { curso_estudiante } from './curso_estudiante.entity.js';
@Module({
  imports: [TypeOrmModule.forFeature([curso_estudiante])],
  controllers: [CursoEstudianteController],
  providers: [CursoEstudianteService]
})
export class CursoEstudianteModule {}
