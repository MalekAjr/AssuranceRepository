import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { SignupDto } from '../dto/signup.dto';
import { LoginDto } from '../dto/login.dto';


@Injectable()
export class AuthService {


  constructor(
    private readonly prisma: PrismaService
  ) {}



  async signup(data: SignupDto) {


    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    });


    if(existingUser){

      return {
        message: "Email already exists"
      };

    }


    const user = await this.prisma.user.create({
      data
    });


    return {
      message: "Account created successfully",
      user
    };

  }




  async login(data: LoginDto) {


    const user = await this.prisma.user.findUnique({

      where:{
        email:data.email
      }

    });


    if(!user){

      return {
        message:"User not found"
      };

    }


    if(user.password !== data.password){

      return {
        message:"Wrong password"
      };

    }


    return {

      message:"Login successful",

      user:{
        id:user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        phone:user.phone
      }

    };

  }


}