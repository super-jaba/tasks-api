import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('Docs')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  app.enableCors({origin: false});

  // TODO: Make a func to get port
  await app.listen(8000);
}

bootstrap();
