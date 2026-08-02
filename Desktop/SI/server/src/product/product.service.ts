import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductService {


  constructor(
    private prisma: PrismaService
  ){}



  create(data: CreateProductDto){


    return this.prisma.product.create({

      data:{
        title: data.title,

        description: data.description,

        insuranceType:{
          connect:{
            id:data.insuranceTypeId
          }
        }

      }

    });

  }



  findAll(){

    return this.prisma.product.findMany({

      include:{
        insuranceType:true
      }

    });

  }



  findOne(id:number){

    return this.prisma.product.findUnique({

      where:{
        id
      },

      include:{
        insuranceType:true
      }

    });

  }



  remove(id:number){

    return this.prisma.product.delete({

      where:{
        id
      }

    });

  }


}