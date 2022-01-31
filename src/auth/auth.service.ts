import { Injectable, Logger } from '@nestjs/common';
import { JwtPayload } from './jwt-payload';
import { TokenService } from './token/token.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');

  constructor(
    private readonly tokenService: TokenService,
  ) {}

  
}
