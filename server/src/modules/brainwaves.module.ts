import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrainwavesController } from '@server/controllers/brainwaves.controller';
import { BrainwavesService } from '@server/services/brainwaves.service';
import { Brainwave } from '@server/entities/brainwaves.entity';
import { BrainwavesResolver } from '@server/resolvers/brainwaves.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Brainwave])],
  providers: [BrainwavesService, BrainwavesResolver],
  controllers: [BrainwavesController],
})
export class BrainwavesModule {}
