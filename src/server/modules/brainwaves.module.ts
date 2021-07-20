import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrainwavesController } from '../controllers/brainwaves.controller';
import { BrainwavesService } from '../services/brainwaves.service';
import { Brainwaves } from '../entities/brainwaves.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brainwaves])],
  providers: [BrainwavesService],
  controllers: [BrainwavesController],
})
export class BrainwavesModule {}
