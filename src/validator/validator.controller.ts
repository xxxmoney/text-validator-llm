import {Body, Controller, Post} from '@nestjs/common';
import {ValidatorService} from "./validator.service.js";
import {ValidateRequestDto} from "./dto/validate-request.dto.js";
import {ValidateResponseDto} from "./dto/validate-response.dto.js";

@Controller('validator')
export class ValidatorController {
    private readonly validatorService: ValidatorService;

    constructor(validatorService: ValidatorService) {
        this.validatorService = validatorService;
    }

    @Post('validate')
    postValidate(@Body() request: ValidateRequestDto): Promise<ValidateResponseDto> {
        return this.validatorService.validate(request);
    }

}
