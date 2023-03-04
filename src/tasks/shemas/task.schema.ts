import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

import { User } from "src/users/schemas/user.schema";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    
    @Prop({required: true})
    title: string;

    @Prop({default: false})
    isCompleted: boolean

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true})
    owner: User

    // TODO: Add timestamp
}

export const TaskSchema = SchemaFactory.createForClass(Task);
