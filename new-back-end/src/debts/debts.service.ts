import { CreateDebtInput } from './dto/create-debt.input';
import { UpdateDebtInput } from './dto/update-debt.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Debt } from './entities/debt.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { JwtPayload } from 'jsonwebtoken';
import { verifyAuthToken } from 'src/auth/Providers/jwt';

@Injectable()
export class DebtsService {
  constructor(
    @InjectRepository(Debt)
    private readonly debtRepository: Repository<Debt>,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  create(token: string, createDebtInput: CreateDebtInput) {
    const newDebt = this.debtRepository.create(createDebtInput);
    console.log(newDebt);
    return this.debtRepository.save(newDebt);
  }

  async findAll(token: string): Promise<Debt[]> {
    const decodedUser = verifyAuthToken(token) as JwtPayload;
    if (typeof decodedUser.id !== 'string') {
      console.error(
        'It seems that you have not connected to the site correctly',
      );
      return null;
    }
    const cachedDebt = await this.cacheService.get(decodedUser.id);
    if (cachedDebt) {
      console.log(`Getting data from cache!`);
      console.log(cachedDebt);
      return cachedDebt[decodedUser.id];
    }
    const Debt = await this.debtRepository.find({
      where: { serviceId: decodedUser.id },
    });
    await this.cacheService.set(decodedUser.id,Debt)
    return Debt;
  }

  async findOne(token: string, id: string): Promise<Debt> {
    const decodedUser = verifyAuthToken(token) as JwtPayload;
    if (typeof decodedUser.id !== 'string') {
      console.error(
        'It seems that you have not connected to the site correctly',
      );
      return null;
    }
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

  async update(token: string, id: string, updateDebtInput: UpdateDebtInput): Promise<Debt> {
    await this.debtRepository.update(id, updateDebtInput);
    return this.debtRepository.findOne({ where: { id } });
  }

  async remove(token: string, id: string): Promise<boolean> {
    const result = await this.debtRepository.delete(id);
    return result.affected > 0;
  }

  async dal(token: string, id: string): Promise<string> {
    await this.cacheService.del(id);
    return 'redis null';
  }
}
