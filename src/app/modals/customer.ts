import { Address } from './address';


export interface Customer {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  address?: Array<Address>;
}
