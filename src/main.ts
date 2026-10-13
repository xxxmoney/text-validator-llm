import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const app = await NestFactory.create(AppModule);
const swagger = new DocumentBuilder()
    .setTitle('Text Validator LLM API')
    .setDescription('API for validating text via LLM')
    .setVersion('1.0')
    .build();
const document = SwaggerModule.createDocument(app, swagger);
SwaggerModule.setup('api', app, document);

await app.listen(process.env.PORT ?? 667);



