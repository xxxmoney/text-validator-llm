import { Injectable } from '@nestjs/common';
import {ValidateRequestDto} from "./dto/validate-request.dto.js";
import {ValidateResponseDto} from "./dto/validate-response.dto.js";

@Injectable()
export class ValidatorService {

    async validate(request: ValidateRequestDto): Promise<ValidateResponseDto> {
        return Promise.resolve({ isValid: true }); // TODO
    }

}
