import BaseEntity from 'src/common/base/entity';
import BloodTypes from 'src/common/constants/blood-type';
import { Column, Entity } from 'typeorm';

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
  donorNumber: string;
}
