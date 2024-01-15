import { InputType, Field } from '@nestjs/graphql';
import ImageDTO, { InputImage, MyImage } from './image.dto';
import NameDTO, { InputName, MyName } from './name.dto';
import { IsOptional, IsNotEmpty, IsBoolean, IsString, Matches, MinLength } from '@nestjs/class-validator';
import { emailRegEx, passwordRegEx, phoneRegEx, phonePassRegEx } from './RegEx';

@InputType()
export class UpdateUserInput {
  @Matches(emailRegEx, {
    message: 'Invalid email format',
  })
  @Field()
  email?: string;

  @Matches(passwordRegEx, { message: 'Password is not strong enough' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Field()
  password?: string;

  @IsString()
  @MinLength(4, { message: 'Name must be at least 4 letters long.' })
  @IsNotEmpty()
  @Field()
  name?: InputName;

  @IsString()
  @Matches(phoneRegEx, { message: 'Invalid phone number format' })
  @Field()
  phone?: string;
  
  @Matches(phonePassRegEx, { message: 'Invalid phone password format' })
  @Field()
  phone_password?: string;

  @Field()
  image?: InputImage;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  @Field(() => Boolean, { defaultValue: true })
  active?: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  @Field(() => Boolean, { defaultValue: false })
  isAdmin?: boolean;
}