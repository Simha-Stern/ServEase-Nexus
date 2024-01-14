import { Matches, MinLength, IsString, IsNotEmpty, IsBoolean, IsOptional } from '@nestjs/class-validator';
import { InputType, Field } from '@nestjs/graphql';
import NameDTO from './name.dto';
import { phonePassRegEx, emailRegEx, passwordRegEx, phoneRegEx } from './RegEx';
import ImageDTO from './image.dto';

@InputType()
export class CreateUserInput {
  @Matches(emailRegEx, {
    message: 'Invalid email format',
  })
  @Field()
  email: string;

  @Matches(passwordRegEx, { message: 'Password is not strong enough' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Field()
  password: string;

  @IsString()
  @MinLength(4, { message: 'Name must be at least 4 letters long.' })
  @IsNotEmpty()
  @Field()
  name: NameDTO;

  @IsString()
  @Matches(phoneRegEx, { message: 'Invalid phone number format' })
  @Field()
  phone: string;
  
  @Matches(phonePassRegEx, { message: 'Invalid phone password format' })
  @Field()
  phone_password: string;

  @Field()
  image?: ImageDTO;

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
