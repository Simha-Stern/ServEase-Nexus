import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DebtsService } from './debts.service';
import { Debt } from './entities/debt.entity';
import { CreateDebtInput } from './dto/create-debt.input';
import { UpdateDebtInput } from './dto/update-debt.input';
import { DebtType } from './dto/schema';

@Resolver(() => Debt)
export class DebtsResolver {
  constructor(private readonly debtsService: DebtsService) {}

  @Mutation(() => DebtType)
  createDebt(@Args('createDebtInput') createDebtInput: CreateDebtInput) {
    return this.debtsService.create(createDebtInput);
  }

  @Query(() => [DebtType], { name: 'debts' })
  findAll() {
    return this.debtsService.findAll();
  }

  @Query(() => DebtType, { name: 'debt' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.debtsService.findOne(id);
  }

  @Mutation(() => DebtType)
  updateDebt(@Args('updateDebtInput') updateDebtInput: UpdateDebtInput,
  @Args('id', { type: () => Int }) id: string
  ) {
    return this.debtsService.update(id, updateDebtInput);
  }

  @Mutation(() => DebtType)
  async removeDebt(@Args('id') id: string): Promise<string> {
    const success = await this.debtsService.remove(id);
    if (success) {
      return id ;
    }
    throw new Error(`Failed to delete debt with id ${id}`);
  }
}
