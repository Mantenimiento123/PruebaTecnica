import { Module } from '@nestjs/common';
import { EstudianteModule } from './estudiante/estudiante.module.js';
import { PrincipalController } from './principal/principal.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsuarioModule } from './usuario/usuario.module.js';
import { CursoModule } from './curso/curso.module.js';
import { CursoEstudianteModule } from './curso_estudiante/curso_estudiante.module.js';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'Alex',
      password: '321',
      database: 'gestion_academica',
      entities: [process.cwd() + '/dist/**/*.entity.js'],
      options: {
    encrypt: true, 
    trustServerCertificate: true,
  },
    }),
    EstudianteModule,
    UsuarioModule,
    CursoModule,
    CursoEstudianteModule],
  controllers: [PrincipalController],
  
})


export class AppModule {}
