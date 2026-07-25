import { Module } from '@nestjs/common';

import { DemandController } from './demand.controller';
import { DemandService } from './demand.service';

import { PrismaModule } from '../prisma/prisma.module';


@Module({

  imports:[
    PrismaModule
  ],

  controllers:[
    DemandController
  ],

  providers:[
    DemandService
  ]

})
export class DemandModule {}