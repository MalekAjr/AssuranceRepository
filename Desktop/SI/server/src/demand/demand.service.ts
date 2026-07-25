import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDemandDto } from './dto/create-demand.dto';


@Injectable()
export class DemandService {


constructor(
 private prisma:PrismaService
){}



async create(
 data:CreateDemandDto,
 userId:number
){


 return this.prisma.demand.create({

   data:{
     ...data,

     user:{
       connect:{
         id:userId
       }
     }

   }

 });


}



}