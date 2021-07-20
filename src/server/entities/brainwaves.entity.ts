import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('brainwaves')
export class Brainwaves {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fileName: string;
}
