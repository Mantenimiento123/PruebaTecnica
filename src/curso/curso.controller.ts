import { Controller, Post, Body, Get,Param, Delete, Patch, ParseIntPipe} from '@nestjs/common';
import { CursoService } from './curso.service.js';
import { createCursoDto } from './dto3/create-curso.dto.js';
import { curso } from './curso.entity.js';


@Controller('curso')
export class CursoController {
    constructor (private cursoService: CursoService) {}
  @Post('/')
      createCurso(@Body() newCurso: createCursoDto):Promise<curso> {
         return this.cursoService.createCurso(newCurso);
      }
    @Get('/')
       getCursos():Promise<curso[]>{
           return this.cursoService.getCursos();
       }
     @Get('/:id')
        getCurso(@Param('id',ParseIntPipe) id: number){
            return this.cursoService.getCurso(id);
        }
        @Delete('/:id')
        deleteCurso(@Param('id',ParseIntPipe) id: number){
           return this.cursoService.deleteCurso(id);
        }
        @Patch('/:id')
        updateCurso(@Param('id',ParseIntPipe) id: number, @Body() curso: createCursoDto){
            return this.cursoService.updateCurso(id,curso);
        }
}
