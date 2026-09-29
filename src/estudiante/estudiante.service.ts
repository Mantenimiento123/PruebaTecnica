import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { estudiante } from './estudiante.entity.js';
import { createEstudianteDto } from './dto/create-estudiante.dto.js';
import { updateEstudianteDto } from './dto/update-estudiante.dto.js';
@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(estudiante)
        private estudianteRepository: Repository<estudiante>,
    ) {}
    createEstudiante(estudianteDto: createEstudianteDto) {
        const newEstudiante=this.estudianteRepository.create(estudianteDto);
        return this.estudianteRepository.save(newEstudiante);
    }
    getEstudiantes() {
        return this.estudianteRepository.find();
    }
    getEstudiante(idEstudiante: number) {
       return this.estudianteRepository.findOne({
            where: { 
                idEstudiante
            }
        })
    }
    deleteEstudiante(idEstudiante: number) {
       return this.estudianteRepository.delete({
            idEstudiante
        })
    }
    updateEstudiante(idEstudiante: number, estudiante: updateEstudianteDto) {
       return this.estudianteRepository.update({
            idEstudiante
        }, estudiante);
    }
}
