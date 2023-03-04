import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

import { Task, TaskDocument } from './shemas/task.schema';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async createTask(task: CreateTaskDto): Promise<TaskDocument> {
        const createdTask = new this.taskModel(task);
        return await createdTask.save();
    }

    async getTasksByOwner(ownerId: string) {
        // TODO;
    }
}
