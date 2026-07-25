import { IsString } from "class-validator";


export class CreateDemandDto {


 @IsString()
 nom!:string;


 @IsString()
 prenom!:string;


 @IsString()
 codePostal!:string;


 @IsString()
 ville!:string;


 @IsString()
 email!:string;


 @IsString()
 telephone!:string;


 @IsString()
 message!:string;


}