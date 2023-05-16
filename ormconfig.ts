import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ConnectionConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'chimuelo_admin',
  synchronize: false,
  entities: ['./src/**/*.entity.ts', './dist/**/*.entity.js'],
};
