import { Controller, Post, Body, Get,Param,ParseIntPipe,Delete,Patch} from '@nestjs/common';
import { createEstudianteDto } from './dto/create-estudiante.dto.js';
import { EstudianteService } from './estudiante.service.js';
import { estudiante } from './estudiante.entity.js';
import { updateEstudianteDto } from './dto/update-estudiante.dto.js';
@Controller('estudiantes')
export class EstudianteController {
    constructor (private estudianteService: EstudianteService) {}
   @Post('/')
    createEstudiante(@Body() newEstudiante: createEstudianteDto):Promise<estudiante> {
       return this.estudianteService.createEstudiante(newEstudiante);
    }
    @Get('/')
    getEstudiantes():Promise<estudiante[]>{
        return this.estudianteService.getEstudiantes();
    }
       @Get('/:id')
    getEstudiante(@Param('id',ParseIntPipe) id: number){
        return this.estudianteService.getEstudiante(id);
    }
    @Delete('/:id')
    deleteEstudiante(@Param('id',ParseIntPipe) id: number){
       return this.estudianteService.deleteEstudiante(id);
    }
    @Patch('/:id')
    updateEstudiante(@Param('id',ParseIntPipe) id: number, @Body() estudiante: updateEstudianteDto){
        return this.estudianteService.updateEstudiante(id,estudiante);
    }
}