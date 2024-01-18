import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DebtsModule } from './debts/debts.module';
import { LoginModule } from './login/login.module';
import { ApolloServerPluginLandingPageLocalDefault as winner}  from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
// import { CacheModule } from './redis/redis.module';
import * as redisStore from 'cache-manager-redis-store';
import { config } from 'dotenv';

config({ path: '../.env' });

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      plugins: [winner()],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      port: Number(process.env.PG_PORT),
      database: process.env.PG_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    }),
    UsersModule,
    DebtsModule,
    LoginModule,
    // CacheModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
