import { Module } from '@nestjs/common';
import { ViewModule } from './modules/view.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './db.config';
import { BrainwavesModule } from './modules/brainwaves.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    GraphQLModule.forRoot({
      debug: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    ViewModule,
    BrainwavesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
