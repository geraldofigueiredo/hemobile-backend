import { Test, TestingModule } from '@nestjs/testing';
import { DemandBloodService } from './demand-blood.service';

describe('DemandBloodService', () => {
  let service: DemandBloodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandBloodService],
    }).compile();

    service = module.get<DemandBloodService>(DemandBloodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
