import { Test, TestingModule } from '@nestjs/testing';
import { HobbysController } from './hobbys.controller';
import { HobbysService } from './hobbys.service';

describe('HobbysController', () => {
  let controller: HobbysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HobbysController],
      providers: [HobbysService],
    }).compile();

    controller = module.get<HobbysController>(HobbysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
