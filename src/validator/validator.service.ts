import {Injectable, Logger} from '@nestjs/common';
import {ValidateRequestDto} from "./dto/validate-request.dto.js";
import {ValidateResponseDto} from "./dto/validate-response.dto.js";
import {ConfigService} from "@nestjs/config";
import {OpenAI} from "openai";
import {PROMPT} from "./validator.constants.js";

@Injectable()
export class ValidatorService {
    private readonly logger: Logger;
    private readonly client: OpenAI;
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
        this.client = new OpenAI({
            baseURL: this.baseUrl,
            apiKey: this.token,
        });
    }

    async validate(request: ValidateRequestDto): Promise<ValidateResponseDto> {
        this.logger.debug(`Using env: baseUrl: '${this.baseUrl}', token: '${this.token}', model: '${this.model}'`);
        this.logger.debug(`Validator validate request body ${JSON.stringify(request)}`);

        const response = await this.client.chat.completions.create({
            model: this.model,
            messages: [
                {
                    role: "system",
                    content: `${PROMPT}: RULE: ${request.rules}'`,
                },
                { role: "user", content: request.text },
            ],
        });
        const output = response.choices[0]?.message?.content;
        this.logger.debug(`LLM response ${JSON.stringify(output)}`);

        return { isValid: output === 'true' };
    }

}
