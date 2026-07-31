import { Body, Controller, Get,Post,Put, Param, } from '@nestjs/common';
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

@Get()
  findAll() {

    return this.demandService.findAll();

  }

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {

    return this.demandService.findOne(Number(id));

  }


  @Put(':id')
update(

  @Param('id') id:string,

  @Body() data:CreateDemandDto

){

  return this.demandService.update(

    Number(id),

    data

  );

}

}