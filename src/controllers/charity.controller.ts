import { repository } from "@loopback/repository";
import { CharitiesRepo } from "../repositories/charities.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { Charity } from "../models/charity";

export class CharityController {
    constructor(
        @repository(CharitiesRepo.name) private charitiesRepo: CharitiesRepo
    ) { }

    // get list of all charities in database
    @post('/charities')
    async createUser(@requestBody() charity: Charity) {
        return await this.charitiesRepo.create(Charity);
    }

    // get list of all charities
    @get('/charites')
    async getAll(): Promise<Array<Charity>> {
        return await this.charitiesRepo.find();
    }

    // find a specific charity by id
    @get('/charities/{id}')
    async findCharityById(@param.path.number('charityId') id: number): Promise<Charity> {
      return await this.charitiesRepo.findById(id);
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
