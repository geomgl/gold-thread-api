import { repository } from "@loopback/repository";
import { UsersRepo } from "../repositories/users.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {
    constructor(
        @repository(UsersRepo.name) private userRepo: UsersRepo
    ) { }

    // register a new user endpoint
    @post('/register')
    async createUser(@requestBody() user: User) {
        return await this.userRepo.create(user);
    }

    // get all users endpoint
    @get('/users')
    async getAll(): Promise<Array<User>> {
        return await this.userRepo.find();
    }

    // get a specific user by id 
    @get('/users/{id}')
    async findUserById(@param.path.number('id') id: number): Promise<User> {
      return await this.userRepo.findById(id);
    }

    // login with username and password endpoint 
    @post('/login')
    async login(@requestBody() user: User) {
        var users = await this.userRepo.find();
        for (var i = 0; i < users.length; i++)
        var username = user[i].username;
        var password = user[i].password; {
            if ((users[i].userName == username) && (users[i].password == password)) {
                return users[i];
            }
        }
    }    
}

    // async login(@requestBody() login: User) {
    //     var user = await this.userRepo.find();
    //     var username = login.username;
    //     var password = login.password; 
    //     for (var i = 0; i < user.length; i++) {
    //         if ((user[i].userName == username) && (user[i].password == password)) {
    //             return user[i];
    //         }
    //     }
    // }
