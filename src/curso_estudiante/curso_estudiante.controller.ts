import { Controller,Post, Get, Delete, Patch } from '@nestjs/common';
import { Body, Param, ParseIntPipe } from '@nestjs/common';
import {CursoEstudianteService} from './curso_estudiante.service.js';
import {createCurso_estudianteDto} from './dto4/create-curso-estudiante.dto.js';
import {curso_estudiante} from './curso_estudiante.entity.js';
import {updateCurso_estudianteDto} from './dto4/update-curso-estudiante.dto.js';
@Controller('curso_estudiante')
export class CursoEstudianteController {
     constructor (private cursoEstudianteService: CursoEstudianteService) {}
       @Post('/')
        createCursoEstudiante(@Body() newCursoEstudiante: createCurso_estudianteDto):Promise<curso_estudiante> {
           return this.cursoEstudianteService.createCursoEstudiante(newCursoEstudiante);
        }
        @Get('/')
        getCursoEstudiantes():Promise<curso_estudiante[]>{
            return this.cursoEstudianteService.getCursoEstudiantes();
        }
         @Get('/:id')
    getCursoEstudiante(@Param('id',ParseIntPipe) id: number){
        return this.cursoEstudianteService.getCursoEstudiante(id);
    }
      @Delete('/:id')
         deleteCursoEstudiante(@Param('id',ParseIntPipe) id: number){
            return this.cursoEstudianteService.deleteCursoEstudiante(id);
         }
         @Patch('/:id')
         updateCursoEstudiante(@Param('id',ParseIntPipe) id: number, @Body() cursoEstudiante: updateCurso_estudianteDto){
             return this.cursoEstudianteService.updateCursoEstudiante(id,cursoEstudiante);
         }
}
