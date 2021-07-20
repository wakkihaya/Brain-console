import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Brainwaves } from './modules/brainwaves/brainwaves.entity';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'test',
  database: 'sample',
  entities: [Brainwaves],
  synchronize: false,
};
