import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({example: 'Do homework', description: 'Title of the task'})
    readonly title: string;

    @ApiProperty({example: 'MongoRefId3rkn3nr3j4r', description: 'ID of the user who created the task'})
    readonly owner: string;
}