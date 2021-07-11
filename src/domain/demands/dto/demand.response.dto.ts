import { OmitType } from '@nestjs/mapped-types';
import { Demand } from '../entities/demand.entity';

export class DemandResponse extends OmitType(Demand, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {
  constructor(demand: Demand) {
    super();
    this.text = demand.text;
  }
}
