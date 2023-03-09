import { Test, TestingModule } from '@nestjs/testing';
import { AccountHobbyResolver } from './accountHobby.resolver';

describe('AccountHobbyResolver', () => {
  let resolver: AccountHobbyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountHobbyResolver],
    }).compile();

    resolver = module.get<AccountHobbyResolver>(AccountHobbyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
