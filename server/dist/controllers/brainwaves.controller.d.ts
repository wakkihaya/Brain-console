import { BrainwavesService } from '@server/services/brainwaves.service';
export declare class BrainwavesController {
    private brainwavesService;
    constructor(brainwavesService: BrainwavesService);
    getBrainwaves(): Promise<import("../entities/brainwaves.entity").Brainwaves[]>;
    getBrainwave(params: any): Promise<import("../entities/brainwaves.entity").Brainwaves>;
}
