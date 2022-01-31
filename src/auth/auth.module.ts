import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TokenService } from './token/token.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: '' })],
  providers: [AuthService, TokenService],
  exports: [AuthService, TokenService],
  controllers: [AuthController],
})
export class AuthModule {}
