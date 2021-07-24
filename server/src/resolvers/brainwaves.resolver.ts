import {
  Brainwave as BrainwavesEntity,
  BrainDataArray as BrainDataArrayEntity,
} from '@server/entities/brainwaves.entity';
import { Inject } from '@nestjs/common';
import { BrainwavesService } from '@server/services/brainwaves.service';
import { Query, Args, Int, Resolver } from '@nestjs/graphql';

@Resolver((of) => BrainwavesEntity)
export class BrainwavesResolver {
  constructor(
    @Inject(BrainwavesService) private brainwavesService: BrainwavesService,
  ) {}

  @Query((returns) => BrainwavesEntity, { nullable: true })
  async getBrainwave(@Args('id', { type: () => Int }) id: number) {
    return await this.brainwavesService.getBrainwave(id);
  }

  @Query((returns) => [BrainwavesEntity], { nullable: true })
  async getBrainwaves() {
    return await this.brainwavesService.getBrainwaves();
  }

  @Query((returns) => [BrainDataArrayEntity], { nullable: true })
  async getDataArrayFromStorage(
    @Args('targetFileName', { type: () => String }) targetFileName: string,
  ) {
    return await this.brainwavesService.getDataArrayFromStorage(targetFileName);
  }
}
