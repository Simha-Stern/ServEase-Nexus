import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DebtsService } from './debts.service';
import { Debt } from './entities/debt.entity';
import { CreateDebtInput } from './dto/create-debt.input';
import { UpdateDebtInput } from './dto/update-debt.input';
import { DebtType } from './dto/schema';
import { Param, UseGuards } from '@nestjs/common';
import { auth } from 'src/auth/authService';

@Resolver(() => Debt)
export class DebtsResolver {
  constructor(private readonly debtsService: DebtsService) {}

  @Mutation(() => DebtType)
  // @UseGuards(auth)
  createDebt(@Args('createDebtInput') createDebtInput: CreateDebtInput,
  @Param('token') token: string,
  ): Promise<Debt> {
    return this.debtsService.create(token, createDebtInput);
  }

  @Query(() => [DebtType], { name: 'debts' })
  findAll(@Param('token') token: string){
    return this.debtsService.findAll(token);
  }

  @Query(() => DebtType, { name: 'debt' })
  findOne(@Args('id') id: string, @Param('token') token: string) {
    return this.debtsService.findOne(token, id);
  }

  @Mutation(() => DebtType)
  updateDebt(
    @Param('token') token: string,
    @Args('updateDebtInput') updateDebtInput: UpdateDebtInput,
    @Args('id') id: string,
  ) {
    return this.debtsService.update(token, id, updateDebtInput);
  }

  @Mutation(() => DebtType)
  async removeDebt(@Args('id') id: string,
  @Param('token') token: string,
  ): Promise<string> {
    const success = await this.debtsService.remove(token, id);
    if (success) {
      return id;
    }
    throw new Error(`Failed to delete debt with id ${id}`);
  }
}
