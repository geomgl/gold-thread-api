import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    userName: string;
    password: string;
    getId(): number | undefined;
}
