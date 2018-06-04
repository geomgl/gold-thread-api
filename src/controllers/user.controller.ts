import { repository } from "@loopback/repository";
import { UsersRepo } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {
    constructor(
        @repository(UsersRepo.name) private userRepo: UsersRepo
    ) { }

    // register controller
    @post('/register')
    async createUser(@requestBody() user: User) {
        return await this.userRepo.create(user);
    }

    // controller to get all users
    @get('/users')
    async getAll(): Promise<Array<User>> {
        return await this.userRepo.find();
    }

    // login controller
    @post('/login')
    // async login(@requestBody() username: string, password: string) {
    //     var user = await this.userRepo.find();
    //     for (var i = 0; i < user.length; i++) {
    //         if ((user[i].userName == username) && (user[i].password == password)) {
    //             return user[i];
    //         }
    //     }
    // }
    async login(@requestBody() login: any) {
        var user = await this.userRepo.find();
        var username = login.username;
        var password = login.password; 
        for (var i = 0; i < user.length; i++) {
            if ((user[i].userName == username) && (user[i].password == password)) {
                return user[i];
            }
        }
    }
}