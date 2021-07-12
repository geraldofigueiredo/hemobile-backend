import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DonationStatus from 'src/common/constants/donation-status';
import errors from 'src/common/constants/errors';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { Donation } from './entities/donation.entity';

@Injectable()
export class DonationsService {
  constructor(
    @InjectRepository(Donation) private readonly repo: Repository<Donation>,
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}

  create(createDonationDto: CreateDonationDto) {
    return 'This action adds a new donation';
  }

  async findHistory(userUuid: string) {
    const user = await this.usersService.findByUUID(userUuid);
    if (!user) {
      throw new InternalServerErrorException(errors.USERS.USER_NOT_FOUND);
    }

    return this.repo.find({
      where: {
        user: {
          id: user.id,
        },
        status: DonationStatus.COMPLETED,
      },
      relations: ['bloodCenter'],
    });
  }

  async findAppointments(userUuid: string) {
    const user = await this.usersService.findByUUID(userUuid);
    if (!user) {
      throw new InternalServerErrorException(errors.USERS.USER_NOT_FOUND);
    }

    return this.repo.find({
      where: {
        user: {
          id: user.id,
        },
        status: DonationStatus.PENDING,
      },
      relations: ['bloodCenter'],
    });
  }
}
