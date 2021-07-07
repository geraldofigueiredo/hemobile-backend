import { Test, TestingModule } from '@nestjs/testing';
import { DemandBloodController } from './demand-blood.controller';
import { DemandBloodService } from './demand-blood.service';

describe('DemandBloodController', () => {
  let controller: DemandBloodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandBloodController],
      providers: [DemandBloodService],
    }).compile();

    controller = module.get<DemandBloodController>(DemandBloodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
