import { Injectable } from '@nestjs/common';
import {User} from '../../Types/User';
@Injectable()
export class UsersService {
    private users: User[] = [
    {
     username: 'zulkar',
     password: '123456'
    },
    {
        username: 'shaon',
        password: '123456'
       },
       {
        username: 'jahid',
        password: '123456'
       }
];

getUsers(){
    return this.users;
}

getUserByUsername (username: string){
    return this.users.find((user)=>
    user.username ===username
    );
}
}
