import { Body, Controller, Get, HttpException, HttpStatus, Inject, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
        ) {}
    
    // constructor(
    //  @Inject('USER_SERVICE') private readonly
    //  userService: UsersService,
    // ) {}

@Get('')
getUser(){
   return this.userService.getUsers();
    }

@Get('/:username')
getByUsername(@Param('username') username: string){
   const user = this.userService.getUserByUsername(username);
   if(user) return user;
   else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() CreateUserDto:CreateUserDto){
      const newUser = this.userRepository.Create(CreateUserDto);
      return this.userRepository.save(newUser);

    }
}
