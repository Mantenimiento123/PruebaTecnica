import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';
@Entity({name: 'estudiante'})
export class estudiante {
 @PrimaryGeneratedColumn()
 idEstudiante: number;
 @Column()
 nombre: string;
 @Column()
 apellido: string;
 @Column()
 nivel: string;
 @Column()
 seccion: string;
  @Column()
 idUsuario: number;
}