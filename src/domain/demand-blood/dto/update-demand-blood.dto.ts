import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandBloodDto } from './create-demand-blood.dto';

export class UpdateDemandBloodDto extends PartialType(CreateDemandBloodDto) {}
