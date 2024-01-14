import { Test, TestingModule } from '@nestjs/testing';
import { DebtsResolver } from './debts.resolver';
import { DebtsService } from './debts.service';

describe('DebtsResolver', () => {
  let resolver: DebtsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebtsResolver, DebtsService],
    }).compile();

    resolver = module.get<DebtsResolver>(DebtsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
