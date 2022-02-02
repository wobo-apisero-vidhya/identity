import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class LoggerService extends Logger {
    error(message: any, stack?: string) {
        //Add triat to message
        message = '[ERROR] ' + message
        super.error(message, stack);
    }

    warn(message: any) {
        message = '[WARN] ' + message
        super.warn(message);
      }
    
    log(message: any) {
        message = '[LOG] ' + message
        super.log(message);
    }

    debug(message: any) {
        message = '[DEBUG] ' + message
        super.debug(message);
    }

    verbose(message: any) {
        message = '[VERBOSE] ' + message
        super.verbose(message);
    }

}
