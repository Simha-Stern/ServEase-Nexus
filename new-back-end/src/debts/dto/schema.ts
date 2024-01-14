import { Field, ObjectType } from '@nestjs/graphql';
import { PaymentStatus } from './interface';

@ObjectType()
export class DebtType {
  @Field()
  id: string;

  @Field()
  paymentMonth: Date;

  @Field()
  serviceId: string;

  @Field()
  paymentAmount: number;

  @Field()
  paidAmount: number;

  @Field()
  paymentStatus: PaymentStatus;

  @Field()
  dueDay: Date;
}
