import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ValidatorModule } from './validator/validator.module.js';

@Module({
  imports: [ValidatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
