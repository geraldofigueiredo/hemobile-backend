import { Module } from '@nestjs/common';
import { BloodCenterService } from './blood-center.service';
import { BloodCenterController } from './blood-center.controller';

@Module({
  controllers: [BloodCenterController],
  providers: [BloodCenterService]
})
export class BloodCenterModule {}
