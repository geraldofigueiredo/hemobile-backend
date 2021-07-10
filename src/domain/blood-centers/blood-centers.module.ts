import { Module } from '@nestjs/common';
import { BloodCentersService } from './blood-centers.service';
import { BloodCentersController } from './blood-centers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodCenter } from './entities/blood-center.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodCenter])],
  controllers: [BloodCentersController],
  providers: [BloodCentersService],
})
export class BloodCentersModule {}
