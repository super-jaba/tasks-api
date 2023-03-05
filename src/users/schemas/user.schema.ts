import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @ApiProperty({example: 'Ivan', description: 'Unique username'})
    @Prop({required: true, unique: true})
    username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);