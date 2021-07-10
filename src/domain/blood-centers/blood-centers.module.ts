import { Module } from '@nestjs/common';
import { BloodCentersService } from './blood-centers.service';
import { BloodCentersController } from './blood-centers.controller';

@Module({
  controllers: [BloodCentersController],
  providers: [BloodCentersService]
})
export class BloodCentersModule {}
