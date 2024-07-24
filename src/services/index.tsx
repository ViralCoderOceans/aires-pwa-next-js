import { AuthApis } from '@/services/auth/auth.service';
import { UsersApis } from '@/services/users/users.service';

export const API = {
  auth: new AuthApis(),
  users: new UsersApis(),
};
