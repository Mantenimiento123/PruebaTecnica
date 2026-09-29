import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';
@Entity({name: 'curso_estudiante'})
export class curso_estudiante {
 @PrimaryGeneratedColumn()
 id_Curso_estudiante: number
 @Column()
 idCurso: number
 @Column()
 idEstudiante: number
}