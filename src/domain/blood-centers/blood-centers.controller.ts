import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BloodCentersService } from './blood-centers.service';
import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { UpdateBloodCenterDto } from './dto/update-blood-center.dto';

@Controller('blood-centers')
export class BloodCentersController {
  constructor(private readonly bloodCentersService: BloodCentersService) {}

  @Post()
  create(@Body() createBloodCenterDto: CreateBloodCenterDto) {
    return this.bloodCentersService.create(createBloodCenterDto);
  }

  @Get()
  findAll() {
    return this.bloodCentersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodCentersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloodCenterDto: UpdateBloodCenterDto) {
    return this.bloodCentersService.update(+id, updateBloodCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodCentersService.remove(+id);
  }
}
