import BaseEntity from "src/common/base/entity";
import DonationStatus from "src/common/constants/donation-status";
import { Column, Entity } from "typeorm";

@Entity({ name: 'donation'})
export class Donation extends BaseEntity{
    @Column ({ name: 'emand_blood_id'})
    emandBloodId: number;

    @Column ({ name: 'user_id'})
    userID: number;
    
    @Column ({ name: 'status'})
    status: DonationStatus;
}
