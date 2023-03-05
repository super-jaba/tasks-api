import { ApiProperty } from "@nestjs/swagger";
import { PaginatableQuery } from "src/common/dto/paginatable-query.dto";

export class GetTasksByOwnerQuery extends PaginatableQuery {
    @ApiProperty({example: 'MongoRefId3rkn3nr3j4r', description: 'ID of the user who created the task'})
    readonly owner: string;
}