import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { DonationResponseDto } from './dto/donation.response.dto';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  async create(@Body() createDonationDto: CreateDonationDto) {
    const createResult = await this.donationsService.create(createDonationDto);
    const donation = await this.donationsService.findByID(
      createResult.identifiers[0].id,
    );
    return new DonationResponseDto(donation);
  }

  @Get('/history/:uuid')
  async findHistory(@Param('uuid') userUuid: string) {
    const donations = await this.donationsService.findHistory(userUuid);
    return donations.map((donation) => new DonationResponseDto(donation));
  }

  @Get('/appointments/:uuid')
  async findAppointments(@Param('uuid') userUuid: string) {
    const donation = await this.donationsService.findAppointments(userUuid);
    return new DonationResponseDto(donation);
  }
}
