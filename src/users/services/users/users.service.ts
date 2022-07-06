import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User as userEntity} from '@nestjs/typeorm';
import {User} from '../../Types/User';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(userEntity)
        private readonly userRepository: Repository<userEntity>, 
    ){}
    
private users: User[] = [];

getUsers(){
    return this.users;
}

getUserByUsername (username: string){
    return this.users.find((user)=>
    user.username ===username
    );
}
createUsers(createUserDto: CreateUserDto){

}

}
