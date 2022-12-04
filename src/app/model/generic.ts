


export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}


export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    empty: boolean;
}

export interface IUser {
    id: number;
    name: string;
    surname: string;
    lastname: string;
    email: string;
    username: string;
    posts: number;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    labels: string;
    visible: boolean;
    datetime: string;
    user: IUser;
}

