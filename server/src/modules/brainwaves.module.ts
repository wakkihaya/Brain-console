import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrainwavesController } from '@server/controllers/brainwaves.controller';
import { BrainwavesService } from '@server/services/brainwaves.service';
import { Brainwaves } from '@server/entities/brainwaves.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brainwaves])],
  providers: [BrainwavesService],
  controllers: [BrainwavesController],
})
export class BrainwavesModule {}
