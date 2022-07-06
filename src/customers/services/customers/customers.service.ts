import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    users = [
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
        return this.users.find((user)=>
            user.id === id
        )
    }

    SearchCustomerById(id: Number){
        return this.users.find((user)=>
            user.id === id
        )
    }
}
