import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, isString } from 'class-validator';

export class CreateProductDto {
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


  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  marca: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
  
  @IsDateString()
  @IsOptional()
  created_at: Date;

  @IsNumber()
  @IsOptional()
  category_id: number;

  @IsNumber()
  @IsOptional()
  proveedor_id: number;

  @IsNumber()
  @IsOptional()
  inventario_id: number;

  @IsNumber()
  @IsOptional()
  fabricante_id: number;

  @IsNumber()
  @IsOptional()
  user_id: number;

  @IsArray({each:true})
  @IsString()
  @IsOptional()
  images?: string[];
}
