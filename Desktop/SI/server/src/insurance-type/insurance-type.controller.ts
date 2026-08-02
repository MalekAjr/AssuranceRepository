import { Body, Controller, Get, Post } from '@nestjs/common';
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
  findAll() {
    return this.insuranceTypeService.findAll();
  }

}