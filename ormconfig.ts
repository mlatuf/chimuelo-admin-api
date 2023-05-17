import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const ConnectionConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'chimuelo_admin',
  synchronize: true,
  logging: true,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
};
