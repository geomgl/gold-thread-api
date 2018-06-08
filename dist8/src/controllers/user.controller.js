"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const users_repository_1 = require("../repositories/users.repository");
const rest_1 = require("@loopback/rest");
const user_1 = require("../models/user");
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    // register a new user endpoint
    async createUser(user) {
        return await this.userRepo.create(user);
    }
    // get all users endpoint
    async getAll() {
        return await this.userRepo.find();
    }
    // get a specific user by id 
    async findUserById(id) {
        return await this.userRepo.findById(id);
    }
    // testing url stuff
    async getDonationsByUserId(userId, dateFrom) {
        console.log("awesome");
        console.log(dateFrom);
    }
    // login with username and password endpoint 
    async login(user) {
        var users = await this.userRepo.find();
        for (var i = 0; i < users.length; i++)
            var username = user[i].username;
        var password = user[i].password;
        {
            if ((users[i].userName == username) && (users[i].password == password)) {
                return users[i];
            }
        }
    }
};
__decorate([
    rest_1.post('/register'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    rest_1.get('/users/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserById", null);
__decorate([
    rest_1.get('/users/{user_id}/donations'),
    __param(0, rest_1.param.path.number('user_id')),
    __param(1, rest_1.param.query.date('date_from')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getDonationsByUserId", null);
__decorate([
    rest_1.post('/login'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    __param(0, repository_1.repository(users_repository_1.UsersRepo.name)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepo])
], UserController);
exports.UserController = UserController;
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
//# sourceMappingURL=user.controller.js.map