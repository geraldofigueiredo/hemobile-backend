import { Injectable } from '@nestjs/common';
import { CreateDemandBloodDto } from './dto/create-demand-blood.dto';
import { UpdateDemandBloodDto } from './dto/update-demand-blood.dto';

@Injectable()
export class DemandBloodService {
  create(createDemandBloodDto: CreateDemandBloodDto) {
    return 'This action adds a new demandBlood';
  }

  findAll() {
    return `This action returns all demandBlood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandBlood`;
  }

  update(id: number, updateDemandBloodDto: UpdateDemandBloodDto) {
    return `This action updates a #${id} demandBlood`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandBlood`;
  }
}
