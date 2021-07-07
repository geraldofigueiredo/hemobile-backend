import BaseEntity from "src/common/base/entity";
import BloodTypes from "src/common/constants/blood-type";
import { Column, Entity } from "typeorm";

@Entity({ name: 'demand_blood'})
export class DemandBlood extends BaseEntity{
    @Column({ name: 'demand_id'})
    demandId: number;

    @Column({ name: 'blood_type'})
    bloodType: BloodTypes;

    @Column({ name: 'requested'})
    requested: number;
}
