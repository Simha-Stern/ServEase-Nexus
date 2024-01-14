import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config({ path: '../.env' });

const PORT = process.env.SERVER_PORT
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(PORT));
}
bootstrap();
