import { Module } from '@nestjs/common';
import { DemandBloodService } from './demand-blood.service';
import { DemandBloodController } from './demand-blood.controller';

@Module({
  controllers: [DemandBloodController],
  providers: [DemandBloodService],
})
export class DemandBloodModule {}
