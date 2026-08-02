import { IsInt, IsString, IsOptional } from "class-validator";

export class CreateProductDto {

  @IsString()
  title!: string;


  @IsOptional()
  @IsString()
  description?: string;


  @IsInt()
  insuranceTypeId!: number;

}