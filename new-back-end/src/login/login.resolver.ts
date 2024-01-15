import { LoginService } from './login.service';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';


@Resolver()
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  @Mutation(() => String) // Assuming your login mutation returns a token (string)
  async loginUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<string | null> {
    return this.loginService.loginUser(username, password);
  }
  
  @Query(() => Boolean)
  async verifyToken(
    @Args('token') token: string,
    @Args('id') id: string
    ): Promise<boolean> {
    return this.loginService.verifyToken(token, id);
  }
}

