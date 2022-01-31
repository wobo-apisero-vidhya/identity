import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { ExtractJwt } from 'passport-jwt';
import { TokenService } from './token/token.service';
import { OkResponse } from './OkResponse';

@Controller('auth')
export class AuthController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('scim_token')
  @HttpCode(200)
  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, type: OkResponse })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
  async token(@Req() req): Promise<OkResponse> {
    let response: OkResponse;

    try {
      const bearerToken = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
      const decodedJwt = await this.tokenService.decodeAndValidateJWT(bearerToken);

      console.log(decodedJwt);
      return response;
    } catch (error) {
      throw new InternalServerErrorException('invalid_grant', error);
    }
  }
}
