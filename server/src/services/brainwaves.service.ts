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

  async fetchDataFromCSV(remoteCSV: any): Promise<BrainDataArray[]> {
    let results = [];
    const csv = require('csv-parser');

    return new Promise((resolve, reject) => {
      remoteCSV
        .createReadStream()
        .on('error', (error) => {
          reject(error);
        })
        .pipe(csv())
        .on('data', (data) => {
          const formatedData = data as BrainDataArray;
          results.push(formatedData);
        })
        .on('end', () => {
          resolve(results);
        });
    });
  }

  async getDataArrayFromStorage(
    targetFileName: string,
  ): Promise<BrainDataArray[]> {
    const { Storage } = require('@google-cloud/storage');

    const storage = new Storage({
      apiEndpoint: 'http://localhost:4443',
    });
    const remoteCSV = storage.bucket('sample-bucket').file(targetFileName);
    const dataArray = await this.fetchDataFromCSV(remoteCSV);
    console.log(dataArray);
    return dataArray;
  }
}
