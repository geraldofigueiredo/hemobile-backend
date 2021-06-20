import { OmitType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class UserResponseDto extends OmitType(User, [
  'id',
  'password',
  'createdAt',
  'updatedAt',
] as const) {
  constructor(user: User) {
    super();
    this.email = user.email;
    this.bloodType = user.bloodType;
    this.cpf = user.cpf;
    this.naturality = user.naturality;
    this.name = user.name;
  }
}
