import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Brainwaves {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;
}
