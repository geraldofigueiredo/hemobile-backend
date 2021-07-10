import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { BloodCentersModule } from './domain/blood-centers/blood-centers.module';
import { UsersModule } from './domain/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UsersModule,
    BloodCentersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
