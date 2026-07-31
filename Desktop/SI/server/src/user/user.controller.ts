import { Controller,Body, Get, Put,Param, } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from 'src/dto/signup.dto';

@Controller('users')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  findAll() {

    return this.userService.findAll();

  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {

    return this.userService.findOne(Number(id));

  }

  @Put(':id')
update(

  @Param('id') id: string,

  @Body() data: SignupDto

){

  return this.userService.update(

    Number(id),

    data

  );

}

}