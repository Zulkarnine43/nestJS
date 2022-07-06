import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    users = [
        {
            id: 1,
            email: 'zulkarnine@gmail.com',
            createdAt: new Date(),
    },
    {
        id: 2,
        email: 'check@gmail.com',
        createdAt: new Date(),
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
        return this.users.find((user)=>{
            user.id === id
        })
    }
}
