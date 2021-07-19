import { Module } from '@nestjs/common';
import { ViewModule } from './modules/view/view.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './db.config';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), ViewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
