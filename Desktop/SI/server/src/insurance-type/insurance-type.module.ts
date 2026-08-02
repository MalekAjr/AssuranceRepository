import { Module } from '@nestjs/common';
import { InsuranceTypeController } from './insurance-type.controller';
import { InsuranceTypeService } from './insurance-type.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InsuranceTypeController],
  providers: [InsuranceTypeService],
})
export class InsuranceTypeModule {}