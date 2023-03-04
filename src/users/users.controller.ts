import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async signup(@Body() candidate: CreateUserDto) {
        try {
            return await this.usersService.createUser(candidate);
        } catch (e) {
            throw new HttpException('User already exists.', HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':name')
    async getUser(@Param('name') name: string) {
        const user = await this.usersService.findUserByName(name);
        if (!user) {
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }
        return user;
    }
}
