import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';
@Entity({name: 'usuario'})
export class usuario{
    @PrimaryGeneratedColumn()
    idUsuario: number;
    @Column()
    nombre: string;
    @Column()
    password: string;
    @Column()
    rol: string;
}