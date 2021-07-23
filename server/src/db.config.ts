import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Brainwave } from '@server/entities/brainwaves.entity';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'test',
  database: 'sample',
  entities: [Brainwave],
  synchronize: true,
};
