import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrainwavesController } from './brainwaves.controller';
import { BrainwavesService } from './brainwaves.service';
import { Brainwaves } from './brainwaves.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brainwaves])],
  providers: [BrainwavesService],
  controllers: [BrainwavesController],
})
export class BrainwavesModule {}
