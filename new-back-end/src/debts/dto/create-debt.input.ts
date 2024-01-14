import { IsDate, IsString, IsNotEmpty, IsNumber } from '@nestjs/class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { PaymentStatus } from './interface';

@InputType()
export class CreateDebtInput {

  @IsDate()
  @Field()
  paymentMonth: Date;

  @IsString()
  @IsNotEmpty()
  @Field()
  serviceId: string;

  @IsNumber()
  @Field()
  paymentAmount: number;

  @IsNumber()
  @Field({ defaultValue: 0, nullable: true })
  paidAmount?: number;

  @Field({ defaultValue: 'Awaiting payment', nullable: true })
  paymentStatus?: PaymentStatus;

  @IsString()
  @Field()
  dueDay: Date;
}
