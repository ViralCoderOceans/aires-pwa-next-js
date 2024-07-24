import { ApiPaginationController } from '../axios/paginationAPI';

export interface IUserTag {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  title: string;
  slug: string;
}
export class UserTagsApis extends ApiPaginationController<IUserTag> {
  protected urlPath: string = '/api/users/tags';
}
