import {UserAddress} from './userAddress';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
}
