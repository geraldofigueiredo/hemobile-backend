import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
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

  @IsOptional()
  @IsString()
  donorNumber: string;

  @IsOptional()
  @IsString()
  naturality: string;

  @IsOptional()
  @IsNumberString()
  cpf: string;
}
