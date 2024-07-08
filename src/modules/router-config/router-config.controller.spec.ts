import { Test, TestingModule } from '@nestjs/testing';
import { RouterConfigController } from './router-config.controller';
import { RouterConfigService } from './router-config.service';

describe('RouterConfigController', () => {
  let controller: RouterConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouterConfigController],
      providers: [RouterConfigService],
    }).compile();

    controller = module.get<RouterConfigController>(RouterConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
