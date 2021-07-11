import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BloodCentersService } from '../blood-centers/blood-centers.service';
import { CreateDemandDto } from './dto/create-demand.dto';
import { UpdateDemandDto } from './dto/update-demand.dto';
import { Demand } from './entities/demand.entity';

@Injectable()
export class DemandsService {
  constructor(
    @InjectRepository(Demand) private readonly repo: Repository<Demand>,
    @Inject(BloodCentersService)
    private readonly bloodCenterService: BloodCentersService,
  ) {}

  create(createDemandDto: CreateDemandDto) {
    return 'This action adds a new demand';
  }

  async findAll() {
    return;
  }

  findOne(id: number) {
    return `This action returns a #${id} demand`;
  }

  update(id: number, updateDemandDto: UpdateDemandDto) {
    return `This action updates a #${id} demand`;
  }

  remove(id: number) {
    return `This action removes a #${id} demand`;
  }
}
