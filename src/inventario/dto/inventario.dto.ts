import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, isString } from 'class-validator';

export class CreateInventarioDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;


  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  stock: string;


}
