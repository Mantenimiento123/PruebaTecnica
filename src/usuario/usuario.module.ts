import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller.js';
import { UsuarioService } from './usuario.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuario } from './usuario.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
