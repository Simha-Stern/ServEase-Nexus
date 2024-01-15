import { MinLength, IsNotEmpty } from '@nestjs/class-validator';
import { ObjectType, Field, InputType } from '@nestjs/graphql';


export class NameDTO {
  @IsNotEmpty()
  @MinLength(2)
  first: string;

  @IsNotEmpty()
  @MinLength(2)
  middle?: string;

  @IsNotEmpty()
  @MinLength(2)
  last: string;
}

export default NameDTO;

@ObjectType()
export class MyName {
  @Field()
  first: string;

  @Field()
  middle?: string;

  @Field()
  last: string;
}

@InputType()
export class InputName {
  @IsNotEmpty()
  @MinLength(2)
  @Field()
  first: string;

  @IsNotEmpty()
  @MinLength(2)
  @Field({ nullable: true })
  middle?: string;

  @IsNotEmpty()
  @MinLength(2)
  @Field()
  last: string;
}