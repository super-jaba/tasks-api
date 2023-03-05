import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Creates a new user'})
    @ApiResponse({status: HttpStatus.CREATED, type: User})
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async signup(@Body() candidate: CreateUserDto) {
        try {
            return await this.usersService.createUser(candidate);
        } catch (e) {
            throw new BadRequestException('User already exists.');
        }
    }

    @ApiOperation({summary: 'Returns user if they exist'})
    @ApiResponse({type: User})
    @Get(':name')
    async getUser(@Param('name') name: string) {
        const user = await this.usersService.findUserByName(name);
        if (!user) {
            throw new NotFoundException('User not found.');
        }
        return user;
    }
}
