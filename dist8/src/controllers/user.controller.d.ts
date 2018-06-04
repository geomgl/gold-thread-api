import { UsersRepo } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UsersRepo);
    createUser(user: User): Promise<User>;
    getAll(): Promise<Array<User>>;
    login(username: string, password: string): Promise<User[] | undefined>;
}
