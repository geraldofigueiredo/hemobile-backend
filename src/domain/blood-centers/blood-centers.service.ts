import { Injectable } from '@nestjs/common';
import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { UpdateBloodCenterDto } from './dto/update-blood-center.dto';

@Injectable()
export class BloodCentersService {
  create(createBloodCenterDto: CreateBloodCenterDto) {
    return 'This action adds a new bloodCenter';
  }

  findAll() {
    return `This action returns all bloodCenters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloodCenter`;
  }

  update(id: number, updateBloodCenterDto: UpdateBloodCenterDto) {
    return `This action updates a #${id} bloodCenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloodCenter`;
  }
}
