import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {usuario} from './usuario.entity.js';
import {createUsuarioDto} from './dto2/create-usuario.dto.js';
import {updateUsuarioDto} from './dto2/update-usuario.dto.js';

@Injectable()
export class UsuarioService {
     constructor(
            @InjectRepository(usuario)
            private usuarioRepository: Repository<usuario>,
        ) {}
         createUsuario(usuarioDto: createUsuarioDto) {
                const newUsuario=this.usuarioRepository.create(usuarioDto);
                return this.usuarioRepository.save(newUsuario);
            }
    getUsuarios() {
        return this.usuarioRepository.find();
    }
     getUsuario(idUsuario: number) {
       return this.usuarioRepository.findOne({
            where: { 
                idUsuario
            }
        })
    }
     deleteUsuario(idUsuario: number) {
       return this.usuarioRepository.delete({
            idUsuario
        })
    }
    updateUsuario(idUsuario: number, usuario: updateUsuarioDto) {
           return this.usuarioRepository.update({
                idUsuario
            }, usuario);
        }
}
    