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

  async findAll() {

    return this.prisma.demand.findMany({

      include: {
        user: true
      },

      orderBy: {
        id: 'asc'
      }

    });

  }

  async findOne(id: number) {

    return this.prisma.demand.findUnique({

      where: {
        id
      },

      include: {
        user: true
      }

    });

  }

async update(

  id:number,

  data:CreateDemandDto

){

  return this.prisma.demand.update({

    where:{
      id
    },

    data

  });

}

}