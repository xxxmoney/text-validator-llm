import {Injectable, Logger} from '@nestjs/common';
import {ValidateRequestDto} from "./dto/validate-request.dto.js";
import {ValidateResponseDto} from "./dto/validate-response.dto.js";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class ValidatorService {
    private readonly logger: Logger;
    private readonly configService: ConfigService;

    private readonly baseUrl: string;
    private readonly token: string;
    private readonly model: string;

    constructor(configService: ConfigService) {
        this.logger = new Logger(ValidatorService.name);
        this.configService = configService;

        this.baseUrl = this.configService.get('BASE_URL') as string;
        this.model = this.configService.get('TOKEN') as string;
        this.token = this.configService.get('MODEL') as string;
    }

    async validate(request: ValidateRequestDto): Promise<ValidateResponseDto> {
        this.logger.debug(`Using env: baseUrl: '${this.baseUrl}', token: '${this.token}', model: '${this.model}'`);
        this.logger.debug(`Validator validate request body ${JSON.stringify(request)}`);

        return Promise.resolve({ isValid: true }); // TODO
    }

}
