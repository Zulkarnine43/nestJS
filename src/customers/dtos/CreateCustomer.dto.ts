import {IsEmail, IsNotEmpty, isNotEmptyObject, IsNumberString, ValidateNested} from 'class-validator';
import { type } from 'os';
import {CreateAddressDto} from './CreateAddress.dto';
export class createCustomerDto {
    @IsEmail()
    email: string;

    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

@ValidateNested()
// @Typo(() => CreateAddressDto)
// @IsNotEmptyObject()
address: CreateAddressDto;
}