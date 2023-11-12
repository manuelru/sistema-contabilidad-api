import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, isString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

}
