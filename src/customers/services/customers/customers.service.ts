import { Injectable } from '@nestjs/common';
import { createCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import {Customer} from '../../types/Customer'
@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: 'zulkarnine@gmail.com',
            name: 'zulkar',
    },
    {
        id: 2,
        email: 'check@gmail.com',
        name: 'zulkar2',
    }
];
    // findCustomer(){
    //     return {
    //             id: 1,
    //             email: 'zulkarnine@gmail.com',
    //             createdAt: new Date(),
    //     }
    // }
    findCustomerById(id: Number){
        return this.customers.find((user)=>
            user.id === id
        )
    }

    SearchCustomerById(id: Number){
        return this.customers.find((user)=>
            user.id === id
        )
    }
    createCustomerDto(customerDto: createCustomerDto){
        this.customers.push(customerDto);
    }
    getCustomers(){
        return this.customers;
    }
}
