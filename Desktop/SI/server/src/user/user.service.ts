import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignupDto } from 'src/dto/signup.dto';

@Injectable()
export class UserService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {

    return this.prisma.user.findMany({

      include: {
        demands: true,
      },

      orderBy: {
        id: 'asc',
      },

    });

  }

  async findOne(id: number) {

    return this.prisma.user.findUnique({

      where: {
        id,
      },

      include: {
        demands: true,
      },

    });

  }

  async update(
  id: number,
  data: SignupDto
) {

  return this.prisma.user.update({

    where: {
      id
    },

    data

  });

}

}