import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): void {
    console.log('root')
  }
}
