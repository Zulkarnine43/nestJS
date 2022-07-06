import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
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
}
