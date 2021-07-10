import BaseEntity from 'src/common/base/entity';
import { BloodCenter } from 'src/domain/blood-centers/entities/blood-center.entity';
import { DemandBlood } from 'src/domain/demand-blood/entities/demand-blood.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Demand extends BaseEntity {
  @Column({ name: 'text' })
  text: string;

  @ManyToOne(() => BloodCenter, (bloodCenter) => bloodCenter.demands)
  bloodCenter: BloodCenter;

  @OneToMany(() => DemandBlood, (demandBlood) => demandBlood.demand)
  demandBloods: DemandBlood[];
}
