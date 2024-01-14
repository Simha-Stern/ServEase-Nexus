import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentStatus } from '../dto/interface';

@Entity()
export class Debt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  paymentMonth: Date;

  @Column()
  serviceId: string;

  @Column()
  paymentAmount: number;

  @Column()
  paidAmount: number;

  @Column()
  paymentStatus: PaymentStatus;

  @Column()
  dueDay: Date;
}

