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
const charities_repository_1 = require("../repositories/charities.repository");
const rest_1 = require("@loopback/rest");
const charity_1 = require("../models/charity");
let CharityController = class CharityController {
    constructor(charitiesRepo) {
        this.charitiesRepo = charitiesRepo;
    }
    // get list of all charities in database
    async createUser(charity) {
        return await this.charitiesRepo.create(charity_1.Charity);
    }
    // get list of all charities
    async getAll() {
        return await this.charitiesRepo.find();
    }
    // find a specific charity by id
    async findCharityById(id) {
        return await this.charitiesRepo.findById(id);
    }
};
__decorate([
    rest_1.post('/charities'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [charity_1.Charity]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "createUser", null);
__decorate([
    rest_1.get('/charites'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "getAll", null);
__decorate([
    rest_1.get('/charities/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "findCharityById", null);
CharityController = __decorate([
    __param(0, repository_1.repository(charities_repository_1.CharitiesRepo.name)),
    __metadata("design:paramtypes", [charities_repository_1.CharitiesRepo])
], CharityController);
exports.CharityController = CharityController;
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
//# sourceMappingURL=charity.controller.js.map