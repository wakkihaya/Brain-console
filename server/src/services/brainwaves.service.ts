import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brainwave } from '@server/entities/brainwaves.entity';

@Injectable()
export class BrainwavesService {
  constructor(
    @InjectRepository(Brainwave)
    private brainwavesRepository: Repository<Brainwave>,
  ) {}

  async getBrainwaves(): Promise<Brainwave[]> {
    return await this.brainwavesRepository.find();
  }

  async getBrainwave(_id: number): Promise<Brainwave> {
    return await this.brainwavesRepository.findOne(_id);
  }
}
