import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DonationStatus from 'src/common/constants/donation-status';
import errors from 'src/common/constants/errors';
import { Repository } from 'typeorm';
import { BloodCentersService } from '../blood-centers/blood-centers.service';
import { UsersService } from '../users/users.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { Donation } from './entities/donation.entity';

@Injectable()
export class DonationsService {
  constructor(
    @InjectRepository(Donation) private readonly repo: Repository<Donation>,
    @Inject(UsersService) private readonly usersService: UsersService,
    @Inject(BloodCentersService)
    private readonly blodCenterService: BloodCentersService,
  ) {}

  async findByID(id: string): Promise<Donation> {
    return this.repo.findOne({
      where: {
        id: id,
      },
      relations: ['bloodCenter'],
    });
  }

  async create(createDonationDto: CreateDonationDto) {
    const bloodCenter = await this.blodCenterService.findOne(
      createDonationDto.bloodCenterUuid,
    );
    if (!bloodCenter) {
      throw new InternalServerErrorException(
        errors.BLOOD_CENTER.BLOOD_CENTER_NOT_FOUND,
      );
    }

    const user = await this.usersService.findByUUID(createDonationDto.userUuid);
    if (!user) {
      throw new InternalServerErrorException(errors.USERS.USER_NOT_FOUND);
    }

    try {
      await this.repo.delete({
        user: { id: user.id },
        status: DonationStatus.PENDING,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        errors.DONATION.ERROR_CREATE_DONATION,
      );
    }

    try {
      const response = await this.repo
        .createQueryBuilder()
        .insert()
        .into(Donation)
        .values({
          bloodCenter: bloodCenter,
          user: user,
          status: DonationStatus.PENDING,
          bloodType: user.bloodType,
        })
        .execute();

      return response;
    } catch (error) {
      throw new InternalServerErrorException(
        errors.DONATION.ERROR_CREATE_DONATION,
      );
    }
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

    return this.repo.findOne({
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
