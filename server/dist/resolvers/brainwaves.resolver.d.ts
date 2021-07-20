import { Brainwaves as BrainwavesEntity } from '@server/entities/brainwaves.entity';
import { BrainwavesService } from '@server/services/brainwaves.service';
export declare class BrainwavesResolver {
    private brainwavesService;
    constructor(brainwavesService: BrainwavesService);
    getBrainwave(id: number): Promise<BrainwavesEntity>;
    getBrainwaves(): Promise<BrainwavesEntity[]>;
}
