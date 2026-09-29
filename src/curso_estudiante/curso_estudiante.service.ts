import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {curso_estudiante} from './curso_estudiante.entity.js';
import {createCurso_estudianteDto} from './dto4/create-curso-estudiante.dto.js';
import {updateCurso_estudianteDto} from './dto4/update-curso-estudiante.dto.js';
@Injectable()
export class CursoEstudianteService {
    constructor(
            @InjectRepository(curso_estudiante)
            private cursoEstudianteRepository: Repository<curso_estudiante>,
        ) {}
        createCursoEstudiante(cursoEstudianteDto: createCurso_estudianteDto) {
            const newCursoEstudiante=this.cursoEstudianteRepository.create(cursoEstudianteDto);
            return this.cursoEstudianteRepository.save(newCursoEstudiante);
        }
        getCursoEstudiantes() {
            return this.cursoEstudianteRepository.find();
        }
         getCursoEstudiante(idCursoEstudiante: number) {
       return this.cursoEstudianteRepository.findOne({
            where: { 
                id_Curso_estudiante: idCursoEstudiante}
        })
    }
         deleteCursoEstudiante(idCursoEstudiante: number) {
               return this.cursoEstudianteRepository.delete({
                    id_Curso_estudiante: idCursoEstudiante
                })
            }
            updateCursoEstudiante(idCursoEstudiante: number, cursoEstudiante: updateCurso_estudianteDto) {
               return this.cursoEstudianteRepository.update({
                    id_Curso_estudiante: idCursoEstudiante
                }, cursoEstudiante);
            }
    }
