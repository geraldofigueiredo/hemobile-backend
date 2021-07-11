import { OmitType } from '@nestjs/mapped-types';
import { Donation } from '../entities/donation.entity';

export class DonationResponseDto extends OmitType(Donation, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {
  constructor(donation: Donation) {
    super();
    this.uuid = donation.uuid;
    this.bloodType = donation.bloodType;
    this.status = donation.status;
  }
}
