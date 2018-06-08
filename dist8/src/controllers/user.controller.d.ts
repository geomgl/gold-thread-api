import { UsersRepo } from "../repositories/users.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UsersRepo);
    createUser(user: User): Promise<User>;
    getAll(): Promise<Array<User>>;
    findUserById(id: number): Promise<User>;
    getDonationsByUserId(userId: number, dateFrom: Date): Promise<void>;
    login(user: User): Promise<User | undefined>;
}
