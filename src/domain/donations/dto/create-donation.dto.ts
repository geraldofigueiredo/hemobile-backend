import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDonationDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  bloodCenterUuid: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  userUuid: string;
}
