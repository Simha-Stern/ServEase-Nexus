import { InputType, Field } from '@nestjs/graphql';
import ImageDTO from './image.dto';
import NameDTO from './name.dto';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  name?: NameDTO;

  @Field({ nullable: true })
  phone?: string;

  @Field()
  phone_password: string;

  @Field()
  image?: ImageDTO;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => Boolean, { nullable: true })
  manager?: boolean;
}