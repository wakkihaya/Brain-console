import { Brainwaves as BrainwavesEntity } from '../entities/brainwaves.entity';
import { Inject } from '@nestjs/common';
import { BrainwavesService } from '../services/brainwaves.service';
import { Query, Args, ID, Resolver } from '@nestjs/graphql';

@Resolver((of) => BrainwavesEntity)
export class BrainwavesResolver {
  constructor(
    @Inject(BrainwavesService) private brainwavesService: BrainwavesService,
  ) {}

  @Query((returns) => BrainwavesEntity)
  async getBrainwave(@Args('id', { type: () => ID }) id: number) {
    return await this.brainwavesService.getBrainwave(id);
  }

  @Query((returns) => [BrainwavesEntity])
  async getBrainwaves() {
    return this.brainwavesService.getBrainwaves();
  }
}
