import { ApiProperty } from "@nestjs/swagger";

export class PaginatableQuery {
    @ApiProperty({example: 0, description: 'Number of tasks to skip for pagination'})
    readonly skip: number = 0;
    @ApiProperty({example: 0, description: 'Number of tasks per one page for pagination'})
    readonly limit: number = 20;
}