import { IsDate, IsString, IsNotEmpty, IsNumber } from '@nestjs/class-validator';
import { CreateDebtInput } from './create-debt.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PaymentStatus } from './interface';

@InputType()
export class UpdateDebtInput extends PartialType(CreateDebtInput) {
  
  @IsDate()
  @Field({ nullable: true })
  paymentMonth?: Date;

  @IsString()
  @IsNotEmpty()
  @Field({ nullable: true })
  serviceId?: string;

  @IsNumber()
  @Field({ nullable: true })
  paymentAmount?: number;

  @IsNumber()
  @Field({ defaultValue: 0, nullable: true })
  paidAmount?: number;

  @Field({ defaultValue: 'Awaiting payment' })
  paymentStatus?: PaymentStatus;

  @IsString()
  @Field({ nullable: true })
  dueDay?: Date;
}
