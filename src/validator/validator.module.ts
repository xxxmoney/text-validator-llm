import { Module } from '@nestjs/common';
import { ValidatorController } from './validator.controller.js';
import { ValidatorService } from './validator.service.js';

@Module({
  controllers: [ValidatorController],
  providers: [ValidatorService]
})
export class ValidatorModule {}
