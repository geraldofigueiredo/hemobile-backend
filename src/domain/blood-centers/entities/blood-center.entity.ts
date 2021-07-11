import BaseEntity from 'src/common/base/entity';
import { Demand } from 'src/domain/demands/entities/demand.entity';
import { Donation } from 'src/domain/donations/entities/donation.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class BloodCenter extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'picture' })
  picture: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'phone' })
  phone: string;

  @OneToMany(() => Demand, (demand) => demand.bloodCenter)
  demands: Demand[];

  @OneToMany(() => Donation, (donation) => donation.bloodCenter)
  donations: Donation[];
}
