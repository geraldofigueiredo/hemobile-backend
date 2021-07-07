import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandBloodService } from './demand-blood.service';
import { CreateDemandBloodDto } from './dto/create-demand-blood.dto';
import { UpdateDemandBloodDto } from './dto/update-demand-blood.dto';

@Controller('demand-blood')
export class DemandBloodController {
  constructor(private readonly demandBloodService: DemandBloodService) {}

  @Post()
  create(@Body() createDemandBloodDto: CreateDemandBloodDto) {
    return this.demandBloodService.create(createDemandBloodDto);
  }

  @Get()
  findAll() {
    return this.demandBloodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandBloodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandBloodDto: UpdateDemandBloodDto) {
    return this.demandBloodService.update(+id, updateDemandBloodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandBloodService.remove(+id);
  }
}
