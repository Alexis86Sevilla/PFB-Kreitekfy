export class Pagination {
    page: number = 0;
    size: number = 5;
    sort: string = "name,asc";
    first: boolean = false;
    last: boolean = false;
    totalPages: number = 0;
    totalElements: number = 0;
}