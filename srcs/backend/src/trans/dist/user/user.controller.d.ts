import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { updateUserDto } from './update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(updateUserDto: updateUserDto): Promise<User>;
}
