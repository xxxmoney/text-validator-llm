import {IsNotEmpty, IsString} from "class-validator";

export class ValidateRequestDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    @IsNotEmpty()
    validation: string;
}
