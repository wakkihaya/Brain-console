import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brainwave, BrainDataArray } from '@server/entities/brainwaves.entity';

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

  async getDataArrayFromStorage(
    targetFileName: string,
  ): Promise<BrainDataArray[]> {
    const { Storage } = require('@google-cloud/storage');
    const csv = require('csv-parser');
    let results: BrainDataArray[] = [];

    const storage = new Storage({
      apiEndpoint: 'http://localhost:4443',
    });
    const remoteCSV = storage.bucket('sample-bucket').file(targetFileName);
    remoteCSV
      .createReadStream()
      .pipe(csv())
      .on('data', (data) => {
        const formatedData = data as BrainDataArray;
        results.push(formatedData);
      });
    return results;
  }
}
