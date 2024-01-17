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
      host: 'localhost',
      username: 'postgres',
      password: 'A@a66442',
      port: 5432,
      database: "users",
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
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
