import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DonationStatus from 'src/common/constants/donation-status';
import { Repository } from 'typeorm';
import { CreateDonationDto } from './dto/create-donation.dto';
import { Donation } from './entities/donation.entity';

@Injectable()
export class DonationsService {
  constructor(
    @InjectRepository(Donation) private readonly repo: Repository<Donation>,
  ) {}

  create(createDonationDto: CreateDonationDto) {
    return 'This action adds a new donation';
  }

  findHistory(userUuid: string) {
    return this.repo.find({
      where: {
        user: {
          uuid: userUuid,
        },
        status: DonationStatus.COMPLETED,
      },
    });
  }

  findAppointments(userUuid: string) {
    return this.repo.find({
      where: {
        user: {
          uuid: userUuid,
        },
        status: DonationStatus.PENDING,
      },
    });
  }
}
