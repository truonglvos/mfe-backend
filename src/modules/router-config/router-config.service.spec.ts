import { Test, TestingModule } from '@nestjs/testing';
import { RouterConfigService } from './router-config.service';

describe('RouterConfigService', () => {
  let service: RouterConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouterConfigService],
    }).compile();

    service = module.get<RouterConfigService>(RouterConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
