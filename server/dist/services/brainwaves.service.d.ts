import { Repository } from 'typeorm';
import { Brainwaves } from '@server/entities/brainwaves.entity';
export declare class BrainwavesService {
    private brainwavesRepository;
    constructor(brainwavesRepository: Repository<Brainwaves>);
    getBrainwaves(): Promise<Brainwaves[]>;
    getBrainwave(_id: number): Promise<Brainwaves>;
}
