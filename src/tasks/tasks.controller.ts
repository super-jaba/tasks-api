import { Body, Controller, Param, Post, Get, HttpStatus, Put, Delete, HttpCode, Query, NotFoundException, BadRequestException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksByOwnerQuery } from './dto/get-tasks-by-owner-query.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createTask(@Body() task: CreateTaskDto) {
        return await this.tasksService.createTask(task);
    }

    @Get(':id')
    async getTask(@Param('id') id: string) {
        const task = this.tasksService.getTaskById(id);
        if (!task) {
            throw new NotFoundException('Task not found.');
        }
        return task;
    }

    @Get()
    async getTasksByOwner(@Query() queryParams: GetTasksByOwnerQuery) {
        return await this.tasksService.getTasksByOwner(queryParams);
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() fieldsToUpdate: UpdateTaskDto) {
        if (!this.tasksService.updateDtoIsValid(fieldsToUpdate)) {
            throw new BadRequestException('You need to pass at least one field to update.');
        }
        return await this.tasksService.updateTask(id, fieldsToUpdate);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        const deleted = await this.tasksService.deleteTask(id);
        if (!deleted) {
            throw new NotFoundException('Task not found.');
        }
    }
}
