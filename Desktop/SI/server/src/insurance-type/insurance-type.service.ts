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

  findAll() {

    return this.prisma.insuranceType.findMany({
      orderBy: {
        id: 'asc',
      },
    });

  }

}