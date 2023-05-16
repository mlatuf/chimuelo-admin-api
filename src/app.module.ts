import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionConfig } from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(ConnectionConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
