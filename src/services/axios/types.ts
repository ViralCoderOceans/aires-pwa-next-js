export interface IRequestHeader {
  responseType?:
    | 'json'
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'text'
    | 'stream';
  [key: string]: any;
}

// export interface IApiResponse {
//   data: any[] | any
//   error: any[]
//   message: string
//   success: boolean
// }

export interface PaginationResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
