import BaseEntity from 'src/common/base/entity';
import BloodTypes from 'src/common/constants/blood-type';
import { Demand } from 'src/domain/demands/entities/demand.entity';
import { Donation } from 'src/domain/donations/entities/donation.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class DemandBlood extends BaseEntity {
  @Column({ name: 'blood_type' })
  bloodType: BloodTypes;

  @Column({ name: 'requested' })
  requested: number;

  @ManyToOne(() => Demand, (demand) => demand.demandBloods)
  @JoinColumn({ name: 'demand_id' })
  demand: Demand;

  @OneToMany(() => Donation, (donation) => donation.demandBlood)
  donations: Donation[];
}
