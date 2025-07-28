import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    publishedDate: Date;
}
