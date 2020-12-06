import { User } from './user';

export class Account {
  id: string;
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  zipCode: number;
  users: User[];
}
