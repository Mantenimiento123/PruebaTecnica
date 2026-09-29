import { Module } from '@nestjs/common';
import { CursoController } from './curso.controller.js';
import { CursoService } from './curso.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { curso } from './curso.entity.js';
@Module({
   imports: [TypeOrmModule.forFeature([curso])],
  controllers: [CursoController],
  providers: [CursoService]
})
export class CursoModule {}
