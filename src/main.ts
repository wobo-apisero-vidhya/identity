import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
//import { HttpExceptionFilter } from './shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main', true);
  const globalPrefix = '/api';

  app.enableCors();
  app.use(helmet());

  if (AppModule.isDev) {
    const swaggerOptions = new DocumentBuilder()
      .setTitle('Identity API')
      .setDescription('API documentation for Identity Service')
      .addBearerAuth()
      .setBasePath(globalPrefix)
      .build();

    const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

    SwaggerModule.setup(`${globalPrefix}/swagger`, app, swaggerDoc);
  }

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  //app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(AppModule.port);

  let baseUrl = app.getHttpServer().address().address;
  if (baseUrl === '0.0.0.0' || baseUrl === '::') {
    baseUrl = 'localhost';
  }
  logger.log(`Listening to http://${baseUrl}:${AppModule.port}${globalPrefix}`);
  if (AppModule.isDev) {
    logger.log(
      `Swagger UI: http://${baseUrl}:${AppModule.port}${globalPrefix}/swagger`,
    );
  }
}
bootstrap();
