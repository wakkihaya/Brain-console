import { Controller, Get, Param } from '@nestjs/common';
import { BrainwavesService } from '../services/brainwaves.service';

@Controller('brainwaves')
export class BrainwavesController {
  constructor(private brainwavesService: BrainwavesService) {}

  //TODO: localhostで叩くと、Nextの404エラーが表示される。
  @Get()
  getBrainwaves() {
    return this.brainwavesService.getBrainwaves();
  }

  @Get(':id')
  getBrainwave(@Param() params) {
    return this.brainwavesService.getBrainwave(params.id);
  }
}
