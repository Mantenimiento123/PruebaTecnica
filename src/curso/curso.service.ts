import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { curso } from './curso.entity.js';
import { createCursoDto } from './dto3/create-curso.dto.js';

@Injectable()
export class CursoService {
     constructor(
            @InjectRepository(curso)
            private cursoRepository: Repository<curso>,
        ) {}
       createCurso(cursoDto: createCursoDto) {
              const newCurso=this.cursoRepository.create(cursoDto);
              return this.cursoRepository.save(newCurso);
          }
    getCursos() {
        return this.cursoRepository.find();
    }
    getCurso(idCurso: number) {
           return this.cursoRepository.findOne({
                where: { 
                    idCurso
                }
            })
        }
        deleteCurso(idCurso: number) {
           return this.cursoRepository.delete({
                idCurso
            })
        }
        updateCurso(idCurso: number, curso: createCursoDto) {
           return this.cursoRepository.update({
                idCurso
            }, curso);
        }
}
