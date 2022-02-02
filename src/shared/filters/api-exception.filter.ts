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
import { ApiException } from '../api-exception.model';

@Catch(BadRequestException)
class BadRequestExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Execution Failed! Please check the request sent.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(UnauthorizedException)
class UnauthorizedExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Authorization failed for your request.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(ForbiddenException)
class ForbiddenExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "You don't have access to the requested action.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(NotFoundException)
class NotFoundExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The requested resource could not be found.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(MethodNotAllowedException)
class MethodNotAllowedExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The requested method is not supported for the provided url.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(NotAcceptableException)
class NotAcceptableExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The request was denied by the server. Please check the request",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(RequestTimeoutException)
class RequestTimeoutExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Time-out. The server took too long to respond. Please try again later.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(ConflictException)
class ConflictExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Your request could not be processed.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(GoneException)
class GoneExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The requested resource is no longer available.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(PayloadTooLargeException)
class PayloadTooLargeExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Your request payload was too large for the server to process.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(UnsupportedMediaTypeException)
class UnsupportedMediaTypeExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "The incoming media type is not supported. Please check the request.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
    }
}

@Catch(UnprocessableEntityException)
class UnprocessableEntityExceptionFilter implements ExceptionFilter {

    catch(exception: BadRequestException, host: ArgumentsHost): void{

        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const errorArray: string[] = [];
        errorArray.push(exception.message);
        const responseBody: ApiException = {
          statusCode: exception.getStatus(),
          message: "Your request was not processed. Please check the request and request body.",
          error: errorArray,
          timestamp: new Date().toISOString(),
          path: req ? req.url : null,
        };

        console.log("Response to be sent :: " + responseBody)
    
        res.status(exception.getStatus()).json({
            error: responseBody,
        });
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