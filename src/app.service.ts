import { Injectable,  } from '@nestjs/common';
import { LoggerService } from 'shared/logger/logger.service';

@Injectable()
export class AppService {
  
  constructor(){}
  private readonly Logger = new LoggerService(AppService.name)
  root(): void {
    console.log('root')
  }

  loggerTest(): void {
    this.Logger.error("Test","This is Stack")
    this.Logger.log("Test")
    this.Logger.debug("Test")
    this.Logger.warn("Test")
    this.Logger.verbose("Test")
  }
}
