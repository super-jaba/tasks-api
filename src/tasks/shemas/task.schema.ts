import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { HydratedDocument } from "mongoose";

import { User } from "src/users/schemas/user.schema";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    
    @ApiProperty({example: 'Do homework', description: 'Title of the task'})
    @Prop({required: true})
    title: string;

    @ApiProperty({example: true, description: 'Task completion flag'})
    @Prop({default: false})
    isCompleted: boolean

    @ApiProperty({example: 'MongoRefId3rkn3nr3j4r', description: 'ID of the user who created the task'})
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true})
    owner: User
}

export const TaskSchema = SchemaFactory.createForClass(Task);
