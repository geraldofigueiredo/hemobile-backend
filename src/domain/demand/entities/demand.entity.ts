import BaseEntity from "src/common/base/entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'demand'})
export class Demand extends BaseEntity {
    @Column({ name: 'blood_center_id'})
    bloodCenterId: number;

    @Column({ name: 'text'})
    text: string;
}
