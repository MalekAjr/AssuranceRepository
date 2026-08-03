import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { InsuranceTypeService } from './insurance-type.service';
import { CreateInsuranceTypeDto } from './dto/create-insurance-type.dto';

@Controller('insurance-types')
export class InsuranceTypeController {

  constructor(
    private readonly insuranceTypeService: InsuranceTypeService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateInsuranceTypeDto,
  ) {
    return this.insuranceTypeService.create(dto);
  }

@Get()
findAll(
  @Query('search') search?: string,
) {
  return this.insuranceTypeService.findAll(search);
}

@Get(':id')
findOne(
  @Param('id') id: string
) {

  return this.insuranceTypeService.findOne(Number(id));

}

@Delete(":id")
remove(
  @Param("id") id:string
){

  return this.insuranceTypeService.remove(
    Number(id)
  );

}

}