import { PaginatableQuery } from "src/common/dto/paginatable-query.dto";

export class GetTasksByOwnerQuery extends PaginatableQuery {
    readonly owner: string;
}