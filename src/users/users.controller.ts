import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    signup(@Body() candidate: CreateUserDto) {
        // Add try catch blocks
        this.usersService.createUser(candidate);
    }
}
