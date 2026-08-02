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

 const {
   insuranceTypeId,
   ...rest
 } = data;


 return this.prisma.demand.create({

   data:{
     ...rest,

     user:{
       connect:{
         id:userId
       }
     },

     insuranceType:{
       connect:{
         id: insuranceTypeId
       }
     }

   }

 });

}

  async findAll() {

    return this.prisma.demand.findMany({

      include: {
        user: true,
        insuranceType: true,
      },

      orderBy: {
        id: 'asc'
      }

    });

  }

  async findOne(id:number){

 return this.prisma.demand.findUnique({

  where:{
    id
  },

  include:{
    user:true,

    insuranceType:{
      include:{
        products:true
      }
    }

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


async getInsuranceDemandStats() {

  const types = await this.prisma.insuranceType.findMany({

    include: {
      _count: {
        select: {
          demands: true
        }
      }
    }

  });


  return types.map((type) => ({

    subject: type.title,

    value: type._count.demands

  }));

}

}