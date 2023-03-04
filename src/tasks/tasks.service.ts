import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksByOwnerQuery } from './dto/get-tasks-by-owner-query.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { Task, TaskDocument } from './shemas/task.schema';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async createTask(task: CreateTaskDto): Promise<TaskDocument> {
        const createdTask = new this.taskModel(task);
        return await createdTask.save();
    }

    async getTaskById(id: string): Promise<TaskDocument> {
        return await this.taskModel.findById(id);
    }

    async getTasksByOwner(query: GetTasksByOwnerQuery): Promise<TaskDocument[]> {
        return await this.taskModel.find({owner: query.owner})
            .skip(query.skip)
            .limit(query.limit);
    }

    async updateTask(id: string, fieldsToUpdate: UpdateTaskDto): Promise<TaskDocument> {
        return await this.taskModel.findByIdAndUpdate(id, fieldsToUpdate);
    }

    updateDtoIsValid(fieldsToUpdate: UpdateTaskDto): boolean {
        return !(fieldsToUpdate.title === undefined && fieldsToUpdate.isCompleted === undefined);
    }

    async deleteTask(id: string): Promise<TaskDocument> {
        return await this.taskModel.findByIdAndDelete(id);
    }
}
