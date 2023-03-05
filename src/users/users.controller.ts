import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';

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
            throw new BadRequestException('User already exists.');
        }
    }

    @Get(':name')
    async getUser(@Param('name') name: string) {
        const user = await this.usersService.findUserByName(name);
        if (!user) {
            throw new NotFoundException('User not found.');
        }
        return user;
    }
}
