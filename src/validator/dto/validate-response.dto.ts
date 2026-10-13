import {IsBoolean, IsNotEmpty} from "class-validator";

export class ValidateResponseDto {
    @IsBoolean()
    @IsNotEmpty()
    isValid: boolean;
}
