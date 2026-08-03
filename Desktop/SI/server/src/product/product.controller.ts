import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';


@Controller('product')
export class ProductController {


  constructor(
    private readonly productService: ProductService
  ){}



  @Post()
  create(
    @Body() data:CreateProductDto
  ){

    return this.productService.create(data);

  }



@Get()
findAll(
  @Query('search') search?: string
){

  return this.productService.findAll(search);

}


  @Get(':id')
  findOne(
    @Param('id') id:string
  ){

    return this.productService.findOne(+id);

  }



@Delete(':id')
remove(@Param('id') id: string) {
  return this.productService.remove(Number(id));
}


}