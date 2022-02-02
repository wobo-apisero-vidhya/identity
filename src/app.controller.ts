import { Get, Controller, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): any {
    return this.appService.root();
  }

  @Get('logger')
  loggerTest(): any {
    return this.appService.loggerTest();
  }
}
