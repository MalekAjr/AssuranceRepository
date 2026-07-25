import { IsEmail, IsString } from "class-validator";


export class SignupDto {

  @IsString()
  firstName!: string;


  @IsString()
  lastName!: string;


  @IsEmail()
  email!: string;


  @IsString()
  phone!: string;


  @IsString()
  password!: string;

}