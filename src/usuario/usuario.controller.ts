import { Controller,Post,Body,Get, Param,ParseIntPipe,Delete,Patch } from '@nestjs/common';
import { UsuarioService } from './usuario.service.js';
import {createUsuarioDto} from './dto2/create-usuario.dto.js';
import {usuario} from './usuario.entity.js';
import {updateUsuarioDto} from './dto2/update-usuario.dto.js';
@Controller('usuario')
export class UsuarioController {
    constructor (private usuarioService: UsuarioService) {}
    @Post('/')
        createUsuario(@Body() newUsuario: createUsuarioDto):Promise<usuario> {
           return this.usuarioService.createUsuario(newUsuario);
        }
    @Get('/')
        getUsuarios():Promise<usuario[]>{
            return this.usuarioService.getUsuarios();
        }
     @Get('/:id')
        getUsuario(@Param('id',ParseIntPipe) id: number){
            return this.usuarioService.getUsuario(id);
        }
     @Delete('/:id')
        deleteUsuario(@Param('id',ParseIntPipe) id: number){
           return this.usuarioService.deleteUsuario(id);
        }
     @Patch('/:id')
        updateUsuario(@Param('id',ParseIntPipe) id: number, @Body() usuario: updateUsuarioDto){
            return this.usuarioService.updateUsuario(id,usuario);
        }
}
