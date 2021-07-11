import { OmitType } from '@nestjs/mapped-types';
import BloodTypes from 'src/common/constants/blood-type';
import DonationStatus from 'src/common/constants/donation-status';
import { DemandBlood } from 'src/domain/demand-blood/entities/demand-blood.entity';
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

    console.log(bloodCenter.demands[0].demandBloods);

    bloodCenter.demands.forEach((demand) => {
      this.requested += demand.demandBloods.reduce(
        (a, b) => a + (b.requested || 0),
        0,
      );

      demand.demandBloods.forEach((demandBlood) => {
        this.bloodTypes.push(demandBlood.bloodType);
      });
    });

    bloodCenter.donations.forEach((donation) => {
      this.collected += donation.status == DonationStatus.COMPLETED ? 1 : 0;
    });

    this.bloodTypes = this.bloodTypes.filter(
      (value, index) => this.bloodTypes.indexOf(value) == index,
    );
  }
}
