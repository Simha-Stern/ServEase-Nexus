import { CreateDebtInput } from './dto/create-debt.input';
import { UpdateDebtInput } from './dto/update-debt.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Debt } from './entities/debt.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class DebtsService {
  constructor(
    @InjectRepository(Debt)
    private readonly debtRepository: Repository<Debt>,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  create(createDebtInput: CreateDebtInput) {
    const newDebt = this.debtRepository.create(createDebtInput);
    console.log(newDebt);
    return this.debtRepository.save(newDebt);
  }

  findAll(): Promise<Debt[]> {
    return this.debtRepository.find();
  }

  async findOne(id: string): Promise<Debt> {
    const cachedDebt = await this.cacheService.get<Debt>(id);
    if (cachedDebt) {
      console.log(`Getting data from cache!`);
      console.log(cachedDebt);
      return cachedDebt;
    }
    const Debt = await this.debtRepository.findOne({ where: { id } });
    await this.cacheService.set(id, Debt);
    console.log('data set to cache', id, Debt);
    return Debt;
  }

  async update(id: string, updateDebtInput: UpdateDebtInput): Promise<Debt> {
    await this.debtRepository.update(id, updateDebtInput);
    return this.debtRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.debtRepository.delete(id);
    return result.affected > 0;
  }
}
