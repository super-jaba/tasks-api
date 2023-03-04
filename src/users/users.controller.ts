import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    async signup(@Body() candidate: CreateUserDto) {
        try {
            return await this.usersService.createUser(candidate);
        } catch (e) {
            throw new HttpException('User already exists.', HttpStatus.BAD_REQUEST);
        }
    }
}
