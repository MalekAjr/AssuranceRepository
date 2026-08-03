import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInsuranceTypeDto } from './dto/create-insurance-type.dto';

@Injectable()
export class InsuranceTypeService {

  constructor(
    private prisma: PrismaService,
  ) {}

  create(data: CreateInsuranceTypeDto) {

    return this.prisma.insuranceType.create({
      data,
    });

  }

 findAll(search?: string) {

  return this.prisma.insuranceType.findMany({

    where: search
      ? {
          OR: [
            {
              title: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : undefined,


    orderBy: {
      id: "asc",
    },

  });

}

findOne(id: number) {
  return this.prisma.insuranceType.findUnique({
    where: {
      id,
    },
  });
}

async remove(id: number) {

  // delete related products first
  await this.prisma.product.deleteMany({
    where: {
      insuranceTypeId: id,
    },
  });


  // delete related demands first
  await this.prisma.demand.deleteMany({
    where: {
      insuranceTypeId: id,
    },
  });


  // then delete insurance type
  return this.prisma.insuranceType.delete({
    where: {
      id,
    },
  });

}

}