import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import BloodTypes from 'src/common/constants/blood-type';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(BloodTypes)
  @IsNotEmpty()
  bloodType: BloodTypes;

  @IsString()
  @IsNotEmpty()
  name: string;
}
