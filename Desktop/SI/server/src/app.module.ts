import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DemandModule } from './demand/demand.module';
import { UserModule } from './user/user.module';
import { InsuranceTypeModule } from './insurance-type/insurance-type.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PrismaModule,AuthModule,DemandModule,UserModule,InsuranceTypeModule,ProductModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
