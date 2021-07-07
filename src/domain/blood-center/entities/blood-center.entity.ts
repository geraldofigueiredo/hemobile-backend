import BaseEntity from 'src/common/base/entity';
import { Column, Entity } from "typeorm";

@Entity({name: 'blood_center'})
export class BloodCenter extends BaseEntity{
    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'picture'})
    picture: string;

    @Column({ name: 'address'})
    address: string;

    @Column({ name: 'phone'})
    phone: string;

}
