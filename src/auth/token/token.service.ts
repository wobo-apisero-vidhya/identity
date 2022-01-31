import { Injectable, Logger } from '@nestjs/common';
import { sign, SignOptions, verify } from 'jsonwebtoken';
import { ConfigurationService } from '../../shared/configuration/configuration.service';
import { JwtPayload } from '../jwt-payload';
import uuid = require('uuid');
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  private readonly logger = new Logger(TokenService.name);

  private readonly jwtOptions: SignOptions;
  private readonly jwtKey: string;
  private refreshTokenTtl: number;
  private expiresInDefault: string | number;

  constructor(
    private readonly configurationService: ConfigurationService,
    private readonly jwtService: JwtService,
  ) {
    this.expiresInDefault = this.configurationService.JWT.AccessTokenTtl;
    this.jwtOptions = { expiresIn: this.expiresInDefault };
    this.jwtKey = this.configurationService.JWT.Key;
    this.refreshTokenTtl = this.configurationService.JWT.RefreshTokenTtl;
  }

  async decodeAndValidateJWT(token: string): Promise<any> {
    this.logger.log(token, 'token');
    if (token) {
      try {
        return this.jwtService.decode(token);
      } catch (error) {
        this.logger.log(error, 'error');
        return null;
      }
    }
  }

  async validatePayload(payload: JwtPayload): Promise<any> {
    const tokenBlacklisted = await this.isBlackListed(payload.sub, payload.exp);
    if (!tokenBlacklisted) {
      return {
        id: payload.sub,
      };
    }
    return null;
  }

  private async validateToken(
    token: string,
    ignoreExpiration: boolean = false,
  ): Promise<JwtPayload> {
    return verify(token, this.configurationService.JWT.Key, {
      ignoreExpiration,
    }) as JwtPayload;
  }

  private async isBlackListed(id: string, expire: number): Promise<boolean> {
    return false; //token expiry
  }
}
