import { OmitType } from '@nestjs/mapped-types';
import BloodTypes from 'src/common/constants/blood-type';
import DonationStatus from 'src/common/constants/donation-status';
import { BloodCenter } from '../entities/blood-center.entity';

export class BloodCenterResponseDto extends OmitType(BloodCenter, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {
  requested: number;
  collected: number;
  bloodTypes: BloodTypes[] = [];

  constructor(bloodCenter: BloodCenter) {
    super();
    this.uuid = bloodCenter.uuid;
    this.name = bloodCenter.name;
    this.picture = bloodCenter.picture;
    this.address = bloodCenter.address;
    this.phone = bloodCenter.phone;
    this.requested = 0;
    this.collected = 0;

    bloodCenter.demands.forEach((demand) => {
      this.requested += demand.demandBloods.reduce(
        (a, b) => a + (b.requested || 0),
        0,
      );

      demand.demandBloods.forEach((demandBlood) => {
        this.collected += demandBlood.donations.reduce(
          (a, b) => a + (b.status == DonationStatus.FULLFILLED ? 1 : 0),
          0,
        );

        this.bloodTypes.push(demandBlood.bloodType);
      });
    });

    this.bloodTypes = this.bloodTypes.filter(
      (value, index) => this.bloodTypes.indexOf(value) == index,
    );
  }
}
