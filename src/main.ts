import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Scraping Coments Instagram')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha', // Ordenar as tags em ordem alfabética
      operationsSorter: 'alpha', // Ordenar as operações em ordem alfabética
    },
  });

  // Habilitar CORS
  app.enableCors();

  // Iniciar o servidor na porta desejada
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
