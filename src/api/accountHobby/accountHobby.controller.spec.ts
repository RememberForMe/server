import { Test, TestingModule } from '@nestjs/testing';
import { AccountHobbyController } from './accountHobby.controller';
import { AccountHobbyService } from './accountHobby.service';

describe('AccountHobbyController', () => {
  let controller: AccountHobbyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountHobbyController],
      providers: [AccountHobbyService],
    }).compile();

    controller = module.get<AccountHobbyController>(AccountHobbyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
