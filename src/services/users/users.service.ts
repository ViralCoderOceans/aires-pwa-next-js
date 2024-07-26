/* eslint-disable  @typescript-eslint/no-explicit-any */
import { IResult } from 'ua-parser-js';

import { IAuthSupportedMethod } from '../auth/auth.service';
import { ApiPaginationController } from '../axios/paginationAPI';
import { PaginationResponse } from '../axios/types';

import { IUserTag } from './userTags.service';

export interface IContactTag {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  title: string;
  slug: string;
}

export interface IContact {
  _id: string;
  id: string;
  name: string;
  email: string;
  user: string | IUser;
  attributes: {
    [key: string]: string | number | boolean;
  };
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  tags: string[] | IContactTag[];
}

export interface IUserEmail {
  _id: string;
  from: string;
  toName: string;
  toEmail: string;
  trackingCode: string;
  user: string | IUser;
  contact: string | IContact;
  campaign: string;
  template: string;
  info: any;
  subject: string;
  bodyHtml: string;
  bodyText: string;
  opened: boolean;
  openHistory: Date[];
  clicked: boolean;
  linksClicked: {
    link: string;
    clickedAt: string;
  }[];
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserTracking {
  ip: string; // ip address of the user
  agent: string; // user agent of the user,
  headers: object;
  info: {
    ua: string;
    browser: IResult['browser'];
    device: IResult['device'];
    engine: IResult['engine'];
    os: IResult['os'];
    cpu: IResult['cpu'];
  };
}

export interface IUserAccount {
  _id: string;
  user: string;
  provider: string;
  type: string;
  providerAccountId: string;
  methodConfig: IAuthSupportedMethod;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserActivity {
  _id: string;
  user: string;
  message: string;
  data: {
    [key: string]: string | number | boolean | object;
  };
  tracking: IUserTracking;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  _id: string;
  id: string;
  name: string;
  image: string;
  role: string;
  email: string;
  blocked: boolean;
  blockedReason: string;
  blockedAt: Date;
  emailVerified: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  accounts?: IUserAccount[];
  tags: string[] | IUserTag[];
}

export interface ITokenResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      name: string;
      role: string;
    };
    token: string;
  };
}

export class UsersApis extends ApiPaginationController<IUser> {
  protected urlPath: string = '/api/users';

  async getProfile(): Promise<IUser> {
    const response = await this.get(`${this.urlPath}/profile`, {});
    return response.data;
  }
  async verifyEmail(code: number): Promise<ITokenResponse> {
    const response = await this.post(
      `${this.urlPath}/verify-email`,
      {},
      {},
      { code }
    );
    return response.data;
  }

  async getMyAccounts(): Promise<PaginationResponse<IUserAccount>> {
    const response = await this.get(`${this.urlPath}/accounts`, {});
    return response.data;
  }

  async getActivities(
    userId: string
  ): Promise<PaginationResponse<IUserActivity>> {
    const response = await this.get(`${this.urlPath}/${userId}/activities`, {});
    return response.data;
  }
  async getEmails(userId: string): Promise<PaginationResponse<IUserEmail>> {
    const response = await this.get(`${this.urlPath}/${userId}/emails`, {});
    return response.data;
  }

  async getUserAccounts(
    userId: string
  ): Promise<PaginationResponse<IUserAccount>> {
    const response = await this.get(`${this.urlPath}/${userId}/accounts`, {});
    return response.data;
  }

  async sendEmail(
    userId: string,
    email: { subject: string; text: string; html: string }
  ) {
    const response = await this.post(
      `${this.urlPath}/${userId}/send-email`,
      {},
      {},
      email
    );
    return response.data;
  }

  async sendTemplateEmail(
    userId: string,
    email: { subject: string; templateId: string }
  ) {
    const response = await this.post(
      `${this.urlPath}/${userId}/send-template-email`,
      {},
      {},
      email
    );
    return response.data;
  }

  async isAlreadySentEmailTemplate(userId: string, templateId: string) {
    const response = await this.get(
      `${this.urlPath}/${userId}/is-already-sent-email-template`,
      {
        templateId,
      },
      {}
    );
    return response.data.isSent == true;
  }

  async blockUser(userId: string, reason: string) {
    const response = await this.patch(
      `${this.urlPath}/${userId}/block`,
      {},
      {},
      {
        reason: reason,
      }
    );
    return response.data;
  }

  async unblockUser(userId: string) {
    const response = await this.patch(
      `${this.urlPath}/${userId}/unblock`,
      {},
      {},
      {}
    );
    return response.data;
  }

  applyUserTags(userId: string, tags: string[]) {
    return this.patch(`${this.urlPath}/${userId}/tags`, {}, {}, { tags });
  }
}
