import { Test, TestingModule } from '@nestjs/testing';
import { BloodCentersService } from './blood-centers.service';

describe('BloodCentersService', () => {
  let service: BloodCentersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodCentersService],
    }).compile();

    service = module.get<BloodCentersService>(BloodCentersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
