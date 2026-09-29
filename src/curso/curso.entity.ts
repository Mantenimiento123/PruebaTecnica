import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';
@Entity({name: 'curso'})
export class curso {
 @PrimaryGeneratedColumn()
 idCurso: number
 @Column()
 nombreCurso: string
}