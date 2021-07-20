import { Module } from '@nestjs/common';
import { ViewModule } from './modules/view.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './db.config';
import { BrainwavesModule } from './modules/brainwaves.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), ViewModule, BrainwavesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
