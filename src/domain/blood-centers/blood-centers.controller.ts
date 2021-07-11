import { Controller, Get, Param } from '@nestjs/common';
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
    return new BloodCenterDemandsDto(bloodCenter);
  }
}
