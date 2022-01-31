import { 
    Catch, 
    ArgumentsHost, 
    BadRequestException, 
    UnauthorizedException, 
    ForbiddenException, 
    NotFoundException,
    MethodNotAllowedException,
    NotAcceptableException,
    RequestTimeoutException,
    ConflictException,
    GoneException,
    ExceptionFilter,
    PayloadTooLargeException,
    UnsupportedMediaTypeException,
    UnprocessableEntityException
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ApiException } from '../api-exception.model';

@Catch(BadRequestException)
class BadRequestExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Bad Request - Please check the request sent.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(UnauthorizedException)
class UnauthorizedExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Authorization failed. Please contact the admin.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(ForbiddenException)
class ForbiddenExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "You don't have access to the requested action. Please contact the admin.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(NotFoundException)
class NotFoundExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The requested resource could not be found.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(MethodNotAllowedException)
class MethodNotAllowedExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The requested method is not supported for the provided url.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(NotAcceptableException)
class NotAcceptableExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The request was denied by the server. Please check the request",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(RequestTimeoutException)
class RequestTimeoutExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Time-out. The server took too long to respond. Please try again later.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(ConflictException)
class ConflictExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Conflict - Your request could not be processed.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(GoneException)
class GoneExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Your requested resource is no longer available and will not be available again.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(PayloadTooLargeException)
class PayloadTooLargeExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Your request payload was too large for the server to process.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(UnsupportedMediaTypeException)
class UnsupportedMediaTypeExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The incoming media type is not supported. Please check the request.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

@Catch(UnprocessableEntityException)
class UnprocessableEntityExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: BadRequestException, host: ArgumentsHost): void{
        const { httpAdapter } = this.httpAdapterHost;
  
        const ctx = host.switchToHttp();
    
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Your request was not processed. Please check the request and request body.",
          error: exception.message,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };

        console.log("Response to be sent :: " + responseBody)
    
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
    }
}

export { 
    BadRequestExceptionFilter, 
    UnauthorizedExceptionFilter, 
    ForbiddenExceptionFilter, 
    NotFoundExceptionFilter,
    MethodNotAllowedExceptionFilter,
    NotAcceptableExceptionFilter,
    RequestTimeoutExceptionFilter,
    ConflictExceptionFilter,
    GoneExceptionFilter,
    PayloadTooLargeExceptionFilter,
    UnsupportedMediaTypeExceptionFilter,
    UnprocessableEntityExceptionFilter
}