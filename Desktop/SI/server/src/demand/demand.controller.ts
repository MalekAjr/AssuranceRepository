import { Body, Controller, Post } from '@nestjs/common';
import { DemandService } from './demand.service';
import { CreateDemandDto } from './dto/create-demand.dto';


@Controller('demand')
export class DemandController {


constructor(
 private demandService:DemandService
){}

@Post()
create(
 @Body() body: CreateDemandDto & { userId:number }
){

 const { userId, ...data } = body;


 return this.demandService.create(
   data,
   userId
 );

}
}