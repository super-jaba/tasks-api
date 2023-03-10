import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(user: CreateUserDto): Promise<UserDocument> {
        const createdUser = new this.userModel(user)
        return await createdUser.save();
    }

    async findUserByName(name: string): Promise<UserDocument> {
        return await this.userModel.findOne({username: name});
    }
}
