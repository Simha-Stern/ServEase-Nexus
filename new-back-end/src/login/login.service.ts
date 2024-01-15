import { Injectable } from '@nestjs/common';
import { JwtPayload } from 'jsonwebtoken';
import { generateAuthToken, verifyAuthToken } from 'src/auth/Providers/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
    constructor(private readonly userRepository: UsersService) {}

  async loginUser(username: string, password: string): Promise<string | null> {
    // Perform authentication logic, validate user credentials, etc.
    const user = await this.userRepository.findByUsernameAndPassword(username, password);

    if (user) {
      // User is authenticated, generate and return a JWT token
      const token = generateAuthToken({
          id: user.id,
          isAdmin: user.isAdmin,
          active: user.active,
          email: user.email,
          password: user.password,
          name: user.name,
          phone: user.phone,
          phone_password: user.phone_password
      });
      return token;
    }

    // Authentication failed
    return null;
  }

  async verifyToken(token: string, id: string): Promise<boolean> {
    // Verify the token and return a boolean indicating its validity
    try {
      const decodedUser = verifyAuthToken(token) as JwtPayload;
      if (typeof decodedUser.id !== 'string' || decodedUser.id !== id) {
        console.error('Token verification failed: Invalid user ID לא מתאים ');
        return false;
      }
      console.log(decodedUser);
      return !!decodedUser;
    } catch (error) {
      console.error('Token verification failed:');
      return false;
    }
  }
}
