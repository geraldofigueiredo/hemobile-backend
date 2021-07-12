import { OmitType } from '@nestjs/mapped-types';
import { Donation } from '../entities/donation.entity';

export class DonationResponseDto extends OmitType(Donation, [
  'id',
  'bloodType',
  'bloodCenter',
  'createdAt',
  'updatedAt',
] as const) {
  bloodCenterName: string;

  constructor(donation: Donation) {
    super();
    this.uuid = donation.uuid;
    this.status = donation.status;
    this.bloodCenterName = donation.bloodCenter.name;
  }
}
