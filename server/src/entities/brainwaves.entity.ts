import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, Int, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Brainwave {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fileName: string;
}

@ObjectType()
@Entity()
export class BrainDataArray {
  @Field((type) => Float)
  @PrimaryGeneratedColumn()
  time: number;

  @Field((type) => Float)
  @Column()
  data: number;
}
