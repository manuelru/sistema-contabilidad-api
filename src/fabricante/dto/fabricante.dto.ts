import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, isString } from 'class-validator';

export class CreateFabricanteDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;


  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  paizfabricacion: string;

  
  @IsDateString()
  @IsOptional()
  fechafabricacion: Date;

}
