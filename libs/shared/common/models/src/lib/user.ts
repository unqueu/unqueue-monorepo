import { Role } from './role';

export class User {
  id: string;
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  roles: Role[];
}
