import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        name: 'username',
        nullable:false,
        default: '',
    })
    username: string;

    @Column({
        name: 'email_address',
        nullable:false,
        default: '',
    })
    email: string;

    @Column({
        name: 'password',
        nullable: false,
        default: '', 
    })
    password: string;

}