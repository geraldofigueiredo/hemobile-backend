import { Module } from '@nestjs/common';
import { DemandsService } from './demands.service';
import { DemandsController } from './demands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demand } from './entities/demand.entity';
import { BloodCentersModule } from '../blood-centers/blood-centers.module';

@Module({
  imports: [BloodCentersModule, TypeOrmModule.forFeature([Demand])],
  controllers: [DemandsController],
  providers: [DemandsService],
})
export class DemandsModule {}
