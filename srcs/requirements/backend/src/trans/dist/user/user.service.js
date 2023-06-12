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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const typeorm_config_1 = require("../configs/typeorm.config");
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        const { username, email, avatar } = createUserDto;
        console.log(typeorm_config_1.typeOrmConfig.entities);
        const dbUser = await this.userRepository.create({ username, email, avatar });
        if (!dbUser)
            return null;
        try {
            console.log("id", dbUser.id);
            await this.userRepository.save(dbUser);
        }
        catch (error) {
            return null;
        }
        return dbUser;
    }
    async getUserByUserName(username) {
        const user = await this.userRepository.findOneBy({ username: username });
        if (!user)
            return null;
        return user;
    }
    async updateUser(updateUserDto) {
        const { username, email, avatar, friends } = updateUserDto;
        const user = await this.getUserByUserName(username);
        if (!user)
            return null;
        user.email = email || user.email;
        user.avatar = avatar || user.avatar;
        if (friends)
            user.friends = user.friends.concat(friends.filter((friend) => (!user.friends.includes(friend))));
        try {
            await this.userRepository.save(user);
        }
        catch (_a) {
            return null;
        }
        return user;
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map