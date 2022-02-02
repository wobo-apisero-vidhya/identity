import { Module, Global } from '@nestjs/common';
import { ConfigurationService } from './configuration/configuration.service';
import { LoggerService } from './logger/logger.service';

@Global()
@Module({
  providers: [ConfigurationService, LoggerService],
  exports: [ConfigurationService],
})
export class SharedModule {}
