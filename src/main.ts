import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

const app = await NestFactory.create(AppModule);
const swagger = new DocumentBuilder()
    .setTitle('Text Validator LLM API')
    .setDescription('API for validating text via LLM')
    .setVersion('1.0')
    .build();
const document = SwaggerModule.createDocument(app, swagger);
SwaggerModule.setup('api', app, document);

app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
}));

await app.listen(process.env.PORT ?? 667);



