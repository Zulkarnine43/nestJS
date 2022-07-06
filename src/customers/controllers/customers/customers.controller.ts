import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import {CustomersService} from '../../services/customers/customers.service'
@Controller('customers')
export class CustomersController {
    constructor(private customersService: 
        CustomersService){}
    @Get(':id')
    getCustomer(
        @Param('id', ParseIntPipe) id:Number , 
        @Req() req:Request,
        @Res() res:Response
        ) {
    // return this.customersService.findCustomer();
const customer = this.customersService.findCustomerById(id);
  if(customer) {
      res.send(customer);
  } else { 
      res.status(400).send({msg: 'Customer not found!'});
  }   
}
@Get('/search/:id')
SearchCustomerById( 
    @Param('id', ParseIntPipe) id:Number){
        const Searchcustomer = this.customersService.findCustomerById(id);
        if(Searchcustomer) return Searchcustomer; 
        else throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);
    }

    @Post('create')
    createCustomer(){

    }
}
