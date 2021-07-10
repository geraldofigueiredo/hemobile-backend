import BaseEntity from 'src/common/base/entity';
import DonationStatus from 'src/common/constants/donation-status';
import { DemandBlood } from 'src/domain/demand-blood/entities/demand-blood.entity';
import { User } from 'src/domain/users/entities/user.entity';
import { Column, ManyToOne } from 'typeorm';

export class Donation extends BaseEntity {
  @Column({ name: 'status' })
  status: DonationStatus;

  @ManyToOne(() => DemandBlood, (demandBlood) => demandBlood.donations)
  demandBlood: DemandBlood;

  @ManyToOne(() => User, (user) => user.donations)
  user: User;
}
