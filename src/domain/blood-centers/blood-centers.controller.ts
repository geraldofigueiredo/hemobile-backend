import { Controller, Get, Param } from '@nestjs/common';
import { BloodCentersService } from './blood-centers.service';
import { BloodCenterResponseDto } from './dto/blood-center.response.dto';

@Controller('blood-centers')
export class BloodCentersController {
  constructor(private readonly bloodCentersService: BloodCentersService) {}

  @Get()
  async findAll() {
    const bloodCenters = await this.bloodCentersService.findAll();
    return bloodCenters.map(
      (bloodCenter) => new BloodCenterResponseDto(bloodCenter),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bloodCenter = await this.bloodCentersService.findOne(id);
    return new BloodCenterResponseDto(bloodCenter);
  }
}
