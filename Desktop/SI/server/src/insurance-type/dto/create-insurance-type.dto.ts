import { IsString } from 'class-validator';

export class CreateInsuranceTypeDto {

  @IsString()
  title!: string;

  @IsString()
  description!: string;

}