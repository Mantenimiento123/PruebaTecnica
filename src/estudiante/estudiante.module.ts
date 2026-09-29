import { Module } from '@nestjs/common';
import { EstudianteController } from './estudiante.controller.js';
import { EstudianteService } from './estudiante.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { estudiante } from './estudiante.entity.js';
@Module({
  imports: [TypeOrmModule.forFeature([estudiante])],
  controllers: [EstudianteController],
  providers: [EstudianteService]
})
export class EstudianteModule {}
