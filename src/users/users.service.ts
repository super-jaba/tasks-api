import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    async createUser(user: CreateUserDto) {
        // TODO: Add user to the database
    }
}
