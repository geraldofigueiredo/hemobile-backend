import { Test, TestingModule } from '@nestjs/testing';
import { BloodCentersController } from './blood-centers.controller';
import { BloodCentersService } from './blood-centers.service';

describe('BloodCentersController', () => {
  let controller: BloodCentersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodCentersController],
      providers: [BloodCentersService],
    }).compile();

    controller = module.get<BloodCentersController>(BloodCentersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
