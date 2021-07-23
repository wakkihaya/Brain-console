import { Controller, Get, Param } from '@nestjs/common';
import { BrainwavesService } from '@server/services/brainwaves.service';

@Controller('brainwaves')
export class BrainwavesController {
  constructor(private brainwavesService: BrainwavesService) {}

  @Get()
  getBrainwaves() {
    return this.brainwavesService.getBrainwaves();
  }

  @Get(':id')
  getBrainwave(@Param() params) {
    return this.brainwavesService.getBrainwave(params.id);
  }
}
