import { UserRepository } from './user.repository';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { updateUserDto } from "./update-user.dto";
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserByUserName(username: string): Promise<User>;
    updateUser(updateUserDto: updateUserDto): Promise<User>;
}
