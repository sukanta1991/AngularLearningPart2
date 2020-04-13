import { CartProduct } from './cartProduct';
import { Address } from './address';


export interface Order {
  id?: string;
  customerId?: string;
  cartProducts?: Array<CartProduct>;
  billingDate?: Date;
  billingAddress?: Address;
  deliveryAddress?: Address;
  paymentDetails?: any;
  totalBill?: number;
  /**
   * Order Status
   */
  status?: status;
}

export enum status {
  PaymentConfirmed = 'payment confirmed',
  PaymentFalied = 'payment falied',
  OrderPlaced = 'order placed',
  Delivered = 'delivered'
}
