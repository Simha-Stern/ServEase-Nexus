import { Field, ObjectType } from '@nestjs/graphql';
import NameDTO, { MyName } from './name.dto';
import { Matches } from '@nestjs/class-validator';
import ImageDTO, { MyImage } from './image.dto';

@ObjectType()
export class UserType {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => MyName)
  name: MyName;

  @Field()
  phone: string;

  @Field()
  phone_password: string;

  @Field(() => MyImage, { nullable: true })
  image?: MyImage;

  @Field()
  active: boolean;

  @Field()
  isAdmin: boolean;

  // @Field()
  // isServant: boolean;
}
