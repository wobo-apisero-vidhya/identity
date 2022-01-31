import { Get, Controller, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  root(): any {
    return [{ oooPsie: 'Hello !' }];
  }
}
