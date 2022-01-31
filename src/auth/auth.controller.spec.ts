import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './token/token.service';
import { GrantType } from './view-models/grant-types.enum';

describe('Auth Controller', () => {
  let module: TestingModule;
  let controller: AuthController;

  const mockEmail = 'user@mail.com';
  const mockPassword = 'password';
  const mockLoginResponse = {
    accessToken: 'accessToken',
    tokenType: 'bearer',
    expiresIn: 1,
    refreshToken: 'refreshToken',
  };
  const mockUser = {
    id: '1234',
    type: 'user',
  };

  const mockIp = '192.168.1.1';

  const mockRequest = {
    headers: {
      'x-forwarded-for': mockIp,
      authorization: 'Bearer ' + mockLoginResponse.accessToken,
    },
    user: mockUser,
  };

  const mockTokenService: Partial<TokenService> = {
    decodeAndValidateJWT: jest.fn(
      async (
        refreshToken
      ): Promise<any> => {
        return mockLoginResponse;
      },
    ),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
         {
          provide: TokenService,
          useValue: mockTokenService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
