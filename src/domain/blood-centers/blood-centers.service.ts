import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BloodCenter } from './entities/blood-center.entity';

@Injectable()
export class BloodCentersService {
  constructor(
    @InjectRepository(BloodCenter)
    private readonly repo: Repository<BloodCenter>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(uuid: string) {
    return this.repo.findOneOrFail({
      where: {
        uuid,
      },
    });
  }
}
