import { Injectable } from '@nestjs/common';
import { CreateDebtInput } from './dto/create-debt.input';
import { UpdateDebtInput } from './dto/update-debt.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Debt } from './entities/debt.entity';

@Injectable()
export class DebtsService {
  constructor(
    @InjectRepository(Debt)
    private readonly  userRepository: Repository<Debt>,
  ) {}
  create(createDebtInput: CreateDebtInput) {
    const newDebt = this.userRepository.create(createDebtInput);
    return this.userRepository.save(newDebt);  }

  findAll(): Promise<Debt[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<Debt | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, updateDebtInput: UpdateDebtInput): Promise<Debt> {
    await this.userRepository.update(id, updateDebtInput);
    return this.userRepository.findOne({ where: { id } });
    }

    async remove(id: string): Promise<boolean> {
      const result = await this.userRepository.delete(id);
      return result.affected > 0;
  }
}
