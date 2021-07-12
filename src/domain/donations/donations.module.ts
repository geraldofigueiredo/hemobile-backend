import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { UsersModule } from '../users/users.module';
import { BloodCentersModule } from '../blood-centers/blood-centers.module';

@Module({
  imports: [
    BloodCentersModule,
    UsersModule,
    TypeOrmModule.forFeature([Donation]),
  ],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
