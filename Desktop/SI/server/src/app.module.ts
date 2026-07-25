import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DemandModule } from './demand/demand.module';

@Module({
  imports: [PrismaModule,AuthModule,DemandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
