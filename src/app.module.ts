import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ValidatorModule } from './validator/validator.module.js';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ValidatorModule, ConfigModule.forRoot({
    isGlobal: true // Available in all modules without importing
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
