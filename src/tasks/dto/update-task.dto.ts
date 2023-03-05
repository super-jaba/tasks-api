import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskDto {
    @ApiProperty({example: 'Do homework', description: 'Title of the task'})
    readonly title?: string;
    
    @ApiProperty({example: true, description: 'Task completion flag'})
    readonly isCompleted?: boolean;
}