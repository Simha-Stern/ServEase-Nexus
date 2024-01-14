import { Field, ObjectType } from '@nestjs/graphql';
import NameDTO from './name.dto';
import { Matches } from '@nestjs/class-validator';
import ImageDTO from './image.dto';

@ObjectType()
export class UserType {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => NameDTO)
  name: NameDTO;

  @Field()
  phone: string;

  @Field()
  phone_password: string;

  @Field()
  image?: ImageDTO;

  @Field()
  active: boolean;

  @Field()
  isAdmin: boolean;
}
