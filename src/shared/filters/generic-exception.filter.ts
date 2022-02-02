import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { ApiException } from '../api-exception.model';
  
  @Catch()
  export class GenericHttpExceptionsFilter implements ExceptionFilter {
  
    catch(exception: any, host: ArgumentsHost): void {
      // In certain situations `httpAdapter` might not be available in the
      // constructor method, thus we should resolve it here.
  
      const ctx = host.switchToHttp();
      const req = ctx.getRequest();
      const res = ctx.getResponse();
  
      const httpStatus = exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      const errorArray: string[] = [];
      errorArray.push(exception.message);
  
      const responseBody: ApiException = {
        statusCode: httpStatus,
        message: "Internal Server Error. Please try again later.",
        error: errorArray,
        timestamp: new Date().toISOString(),
        path: req ? req.url : null
      };

      console.log("Response to be sent :: " + responseBody)
  
      res.status(httpStatus).json({
        error: responseBody,
      });
    }
  }
  