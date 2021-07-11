import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import errors from 'src/common/constants/errors';
import { BloodCentersService } from './blood-centers.service';
import { BloodCenterDemandsDto } from './dto/blood-center-demands.dto';
import { BloodCenterResponseDto } from './dto/blood-center.response.dto';

@Controller('blood-centers')
export class BloodCentersController {
  constructor(private readonly bloodCentersService: BloodCentersService) {}

  @Get()
  async findAll() {
    const bloodCenters =
      await this.bloodCentersService.findAllCompleteRelations();

    return bloodCenters.map(
      (bloodCenter) => new BloodCenterResponseDto(bloodCenter),
    );
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string) {
    const bloodCenter = await this.bloodCentersService.findOne(uuid);
    if (!bloodCenter) {
      throw new InternalServerErrorException(
        errors.BLOOD_CENTER.BLOOD_CENTER_NOT_FOUND,
      );
    }
    return new BloodCenterDemandsDto(bloodCenter);
  }
}
