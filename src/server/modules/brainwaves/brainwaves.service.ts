import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brainwaves } from './brainwaves.entity';

@Injectable()
export class BrainwavesService {
  constructor(
    @InjectRepository(Brainwaves)
    private brainwavesRepository: Repository<Brainwaves>,
  ) {}

  async getBrainwaves(): Promise<Brainwaves[]> {
    return await this.brainwavesRepository.find();
  }

  async getBrainwave(_id: number): Promise<Brainwaves> {
    return await this.brainwavesRepository.findOne(_id);
  }
}
