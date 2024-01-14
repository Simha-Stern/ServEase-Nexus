import { Module } from '@nestjs/common';
import { DebtsService } from './debts.service';
import { DebtsResolver } from './debts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debt } from './entities/debt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Debt])],
  providers: [DebtsResolver, DebtsService],
})
export class DebtsModule {}
