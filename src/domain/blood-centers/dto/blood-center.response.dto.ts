import { OmitType } from '@nestjs/mapped-types';
import { BloodCenter } from '../entities/blood-center.entity';

export class BloodCenterResponseDto extends OmitType(BloodCenter, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {
  constructor(bloodCenter: BloodCenter) {
    super();
    this.uuid = bloodCenter.uuid;
    this.name = bloodCenter.name;
    this.picture = bloodCenter.picture;
    this.address = bloodCenter.address;
    this.phone = bloodCenter.phone;
  }
}
