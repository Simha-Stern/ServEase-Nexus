import { Matches, MinLength } from '@nestjs/class-validator';
import { ObjectType, Field, InputType } from '@nestjs/graphql';


export class ImageDTO {
  @Matches(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    {
      message: 'url must be a valid url',
    },
  )
  url: string;

  alt?: string;
}

export default ImageDTO;

@ObjectType()
export class MyImage {
  @Field()
  url: string;

  @Field()
  alt?: string;
}

@InputType()
export class InputImage {
  @Matches(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    {
      message: 'url must be a valid url',
    },
  )
  @Field()
  url: string;

  @Field()
  alt?: string;
}