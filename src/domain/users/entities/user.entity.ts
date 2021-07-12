import BaseEntity from 'src/common/base/entity';
import BloodTypes from 'src/common/constants/blood-type';
import { Donation } from 'src/domain/donations/entities/donation.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'blood_type' })
  bloodType: BloodTypes;

  @Column({ name: 'naturality' })
  naturality: string;

  @Column({ name: 'cpf' })
  cpf: string;

  @Column({ name: 'donor_number' })
  donorNumber: number;

  @OneToMany(() => Donation, (donation) => donation.user)
  donations: Donation[];
}
