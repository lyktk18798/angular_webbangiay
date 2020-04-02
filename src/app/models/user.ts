import {Role} from './role';

export class User {
  id: number;
  email: string;
  fullname: string;
  phonenumber: string;
  roleId: number;
  createDate: string;
  createBy: number;
  password: string;
  role: Role;
}
