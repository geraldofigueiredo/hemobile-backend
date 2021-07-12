import BaseEntity from 'src/common/base/entity';
import BloodTypes from 'src/common/constants/blood-type';
import DonationStatus from 'src/common/constants/donation-status';
import { BloodCenter } from 'src/domain/blood-centers/entities/blood-center.entity';
import { User } from 'src/domain/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Donation extends BaseEntity {
  @Column({ name: 'status' })
  status: DonationStatus;

  @Column({ name: 'blood_type' })
  bloodType: BloodTypes;

  @Column({ name: 'date' })
  date: string;

  @ManyToOne(() => BloodCenter, (bloodCenter) => bloodCenter.donations)
  @JoinColumn({ name: 'blood_center_id' })
  bloodCenter: BloodCenter;

  @ManyToOne(() => User, (user) => user.donations)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
