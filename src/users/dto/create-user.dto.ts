import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'Ivan', description: 'Unique username'})
    readonly username: string;
}