import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { User } from '../models/user';
export declare class UsersRepo extends DefaultCrudRepository<User, typeof User.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
