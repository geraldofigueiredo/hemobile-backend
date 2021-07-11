import { OmitType } from '@nestjs/mapped-types';
import BloodTypes from 'src/common/constants/blood-type';
import DonationStatus from 'src/common/constants/donation-status';
import { DemandBlood } from 'src/domain/demand-blood/entities/demand-blood.entity';
import { Demand } from 'src/domain/demands/entities/demand.entity';
import { BloodCenter } from '../entities/blood-center.entity';

class BloodCenterDemandDto {
  bloodType: BloodTypes;
  requested: number;
  collected: number;

  constructor(btype: BloodTypes, req: number, col: number) {
    this.bloodType = btype;
    this.requested = req;
    this.collected = col;
  }
}

export class BloodCenterDemandsDto extends OmitType(BloodCenter, [
  'id',
  'demands',
  'createdAt',
  'updatedAt',
] as const) {
  demands: BloodCenterDemandDto[];

  constructor(bloodCenter: BloodCenter) {
    super();
    this.uuid = bloodCenter.uuid;
    this.name = bloodCenter.name;
    this.picture = bloodCenter.picture;
    this.address = bloodCenter.address;
    this.phone = bloodCenter.phone;
    this.demands = [];

    const demandBlood = this.getFlattenDemandBloodArray(bloodCenter.demands);
    for (const btype in BloodTypes) {
      const filtered = demandBlood.filter(
        (dblood) => dblood.bloodType == BloodTypes[btype],
      );

      const requested = filtered.reduce(
        (prev, curr) => prev + (curr.requested || 0),
        0,
      );
      const completedDonations = bloodCenter.donations.filter(
        (donation) =>
          donation.bloodType == BloodTypes[btype] &&
          donation.status == DonationStatus.COMPLETED,
      );
      const collected = completedDonations.length;

      this.demands.push(
        new BloodCenterDemandDto(BloodTypes[btype], requested, collected),
      );
    }
  }

  private getFlattenDemandBloodArray(demands: Demand[]) {
    const flatDemandBlood: DemandBlood[][] = [];
    demands.forEach((demand) => flatDemandBlood.push(demand.demandBloods));
    // eslint-disable-next-line prefer-spread
    const flatten: DemandBlood[] = [].concat.apply([], flatDemandBlood);
    return flatten;
  }
}
