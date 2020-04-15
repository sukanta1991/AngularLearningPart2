import { Customer } from 'src/app/modals/customer';
import { Product } from '../src/app/modals/product';
import { Order, status } from 'src/app/modals/order';
import { CartProduct } from 'src/app/modals/cartProduct';

export const token = { access_token: 'jwtToken134ouqegkjaf-hksdbhfqfakfhwiuf'};

export const loginCredentials = { email: 'bruno@email.com', password: 'bruno' };

export const cart: CartProduct[] = [
  {
    productId: '18',
    productName: 'Tur Dal',
    quantity: 7,
    price: 490
  },
  {
    productId: '27',
    productName: 'Salt',
    quantity: 6,
    price: 176
  }
];

export const product: Product = {
  id: '11',
  image: '../../../assets/images/Green apple.jpeg',
  category: 'fruit',
  name: 'Green Apple',
  description: '4pcs',
  price: 266,
};

export const user: Customer = {
  id: '1',
  firstName: 'bruno',
  lastName: 'mars',
  email: 'bruno@email.com',
  password: 'bruno',
  address: [
    {
      buildingNo: '250',
      street: 'longbow street',
      area: 'chris avenue',
      city: 'Boston',
      state: 'Los angeles',
      pincode: 12345,
      name: 'bruno',
      contactNumber: 9592923958
    }
  ]
};
export const order: Order = {
  cartProducts: [
    {
      productId: '3',
      productName: 'Brinjal',
      quantity: 1,
      price: 25
    },
    {
      productId: '6',
      productName: 'Carrot',
      quantity: 2,
      price: 40
    },
    {
      productId: '7',
      productName: 'Chana Dal',
      quantity: 4,
      price: 50
    },
    {
      productId: '11',
      productName: 'Green Apple',
      quantity: 4,
      price: 266
    }
  ],
  customerId: '1',
  billingAddress: {
    buildingNo: '250',
    street: 'longbow street',
    area: 'chris avenue',
    city: 'Boston',
    state: 'Los angeles',
    pincode: 12345,
    name: 'bruno',
    contactNumber: 9592923958
  },
  deliveryAddress: {
    buildingNo: '250',
    street: 'longbow street',
    area: 'chris avenue',
    city: 'Boston',
    state: 'Los angeles',
    pincode: 12345,
    name: 'bruno',
    contactNumber: 9592923958
  },
  paymentDetails: 'Card',
  billingDate: new Date(),
  totalBill: 1369,
  status: status.OrderPlaced,
  id: '7'
};

export const ordersByCustomer: Order[] = [
  {
    cartProducts: [
      {
        productId: '12',
        productName: 'Green Moong Dal',
        quantity: 4,
        price: 143
      },
      {
        productId: '6',
        productName: 'Carrot',
        quantity: 1,
        price: 40
      }
    ],
    customerId: '1',
    totalBill: 612,
    status: status.OrderPlaced,
    id: '4'
  },
  {
    cartProducts: [
      {
        productId: '6',
        productName: 'Carrot',
        quantity: 1,
        price: 40
      },
      {
        productId: '15',
        productName: 'Kiwi',
        quantity: 5,
        price: 176
      }
    ],
    customerId: '1',
    totalBill: 920,
    status: status.OrderPlaced,
    id: '5'
  },
  {
    cartProducts: [
      {
        productId: '3',
        productName: 'Brinjal',
        quantity: 1,
        price: 25
      },
      {
        productId: '6',
        productName: 'Carrot',
        quantity: 2,
        price: 40
      },
      {
        productId: '7',
        productName: 'Chana Dal',
        quantity: 4,
        price: 50
      },
      {
        productId: '11',
        productName: 'Green Apple',
        quantity: 4,
        price: 266
      }
    ],
    customerId: '1',
    billingAddress: {
      buildingNo: '250',
      street: 'longbow street',
      area: 'chris avenue',
      city: 'Boston',
      state: 'Los angeles',
      pincode: 12345,
      name: 'bruno',
      contactNumber: 9592923958
    },
    deliveryAddress: {
      buildingNo: '250',
      street: 'longbow street',
      area: 'chris avenue',
      city: 'Boston',
      state: 'Los angeles',
      pincode: 12345,
      name: 'bruno',
      contactNumber: 9592923958
    },
    paymentDetails: 'Card',
    billingDate: new Date('2020-04-12T23:03:06.827Z'),
    totalBill: 1369,
    status: status.OrderPlaced,
    id: '7'
  }
];

export const fruitProducts: Product[] = [
  {
    id: '1',
    image: '../../../assets/images/Apple.jpeg',
    category: 'fruit',
    name: 'Apple',
    description: '3pcs',
    price: 200
  },
  {
    id: '2',
    image: '../../../assets/images/Banana.jpeg',
    category: 'fruit',
    name: 'Banana',
    description: '6pcs',
    price: 70
  },
  {
    id: '10',
    image: '../../../assets/images/Grape.jpeg',
    category: 'fruit',
    name: 'Grape',
    description: '100gms',
    price: 49
  },
  {
    id: '11',
    image: '../../../assets/images/Green apple.jpeg',
    category: 'fruit',
    name: 'Green Apple',
    description: '4pcs',
    price: 266
  },
  {
    id: '14',
    image: '../../../assets/images/Guava.jpeg',
    category: 'fruit',
    name: 'Guava',
    description: '6pcs',
    price: 50
  },
  {
    id: '15',
    image: '../../../assets/images/Kiwi.jpeg',
    category: 'fruit',
    name: 'Kiwi',
    description: '4pcs',
    price: 176
  },
  {
    id: '19',
    image: '../../../assets/images/Orange.jpeg',
    category: 'fruit',
    name: 'Orange',
    description: '3pcs',
    price: 90
  },
  {
    id: '21',
    image: '../../../assets/images/Peach.jpeg',
    category: 'fruit',
    name: 'Peach',
    description: '6pcs',
    price: 233
  },
  {
    id: '23',
    image: '../../../assets/images/Pomegrante.jpeg',
    category: 'fruit',
    name: 'Pomegrante',
    description: '3pcs',
    price: 239
  }
];

export const allProducts: Product[] =
[
  {
    id: '1',
    image: '../../../assets/images/Apple.jpeg',
    category: 'fruit',
    name: 'Apple',
    description: '3pcs',
    price: 200
  },
  {
    id: '2',
    image: '../../../assets/images/Banana.jpeg',
    category: 'fruit',
    name: 'Banana',
    description: '6pcs',
    price: 70
  },
  {
    id: '3',
    image: '../../../assets/images/Brinjal.jpeg',
    category: 'vegetable',
    name: 'Brinjal',
    description: '4pcs',
    price: 25
  },
  {
    id: '4',
    image: '../../../assets/images/Brocoli.jpeg',
    category: 'vegetable',
    name: 'Brocoli',
    description: '500gms',
    price: 37
  },
  {
    id: '5',
    image: '../../../assets/images/Capsicum.jpeg',
    category: 'vegetable',
    name: 'Capsicum',
    description: '3pcs',
    price: 27
  },
  {
    id: '6',
    image: '../../../assets/images/Carrot.jpeg',
    category: 'vegetable',
    name: 'Carrot',
    description: '500gms',
    price: 40
  },
  {
    id: '7',
    image: '../../../assets/images/Chana.jpeg',
    category: 'grocery',
    name: 'Chana Dal',
    description: '500gms',
    price: 50
  },
  {
    id: '8',
    image: '../../../assets/images/Garlic.jpeg',
    category: 'vegetable',
    name: 'Garlic',
    description: '5pcs',
    price: 34
  },
  {
    id: '9',
    image: '../../../assets/images/Ginger.jpeg',
    category: 'vegetable',
    name: 'Ginger',
    description: '100gms',
    price: 16
  },
  {
    id: '10',
    image: '../../../assets/images/Grape.jpeg',
    category: 'fruit',
    name: 'Grape',
    description: '100gms',
    price: 49
  },
  {
    id: '11',
    image: '../../../assets/images/Green apple.jpeg',
    category: 'fruit',
    name: 'Green Apple',
    description: '4pcs',
    price: 266
  },
  {
    id: '12',
    image: '../../../assets/images/GreenMoong.jpeg',
    category: 'grocery',
    name: 'Green Moong Dal',
    description: '500gms',
    price: 143
  },
  {
    id: '13',
    image: '../../../assets/images/GreenMoongUp.jpeg',
    category: 'grocery',
    name: 'Green Moong Unpolished',
    description: '500gms',
    price: 120
  },
  {
    id: '14',
    image: '../../../assets/images/Guava.jpeg',
    category: 'fruit',
    name: 'Guava',
    description: '6pcs',
    price: 50
  },
  {
    id: '15',
    image: '../../../assets/images/Kiwi.jpeg',
    category: 'fruit',
    name: 'Kiwi',
    description: '4pcs',
    price: 176
  },
  {
    id: '16',
    image: '../../../assets/images/Mansoor.jpeg',
    category: 'grocery',
    name: 'Mansoor Dal',
    description: '500gms',
    price: 241
  },
  {
    id: '17',
    image: '../../../assets/images/moong.jpeg',
    category: 'grocery',
    name: 'Moong Dal',
    description: '500gms',
    price: 71
  },
  {
    id: '18',
    image: '../../../assets/images/Onion.jpeg',
    category: 'vegetable',
    name: 'Onion',
    description: '4pcs',
    price: 47
  },
  {
    id: '19',
    image: '../../../assets/images/Orange.jpeg',
    category: 'fruit',
    name: 'Orange',
    description: '3pcs',
    price: 90
  },
  {
    id: '20',
    image: '../../../assets/images/Pancharatna.jpeg',
    category: 'a',
    name: 'Pancharatna Dal',
    description: '500gms',
    price: 149
  },
  {
    id: '20',
    image: '../../../assets/images/Pancharatna.jpeg',
    category: 'grocery',
    name: 'Pancharatna Dal',
    description: '500gms',
    price: 149
  },
  {
    id: '21',
    image: '../../../assets/images/Peach.jpeg',
    category: 'fruit',
    name: 'Peach',
    description: '6pcs',
    price: 233
  },
  {
    id: '22',
    image: '../../../assets/images/pepper.jpeg',
    category: 'grocery',
    name: 'Pepper',
    description: '100gms',
    price: 30
  },
  {
    id: '23',
    image: '../../../assets/images/Pomegrante.jpeg',
    category: 'fruit',
    name: 'Pomegrante',
    description: '3pcs',
    price: 239
  },
  {
    id: '24',
    image: '../../../assets/images/Potato.jpeg',
    category: 'vegetable',
    name: 'Potato',
    description: '3pcs',
    price: 27
  },
  {
    id: '25',
    image: '../../../assets/images/Radish.jpeg',
    category: 'vegetable',
    name: 'Radish',
    description: '5pcs',
    price: 45
  },
  {
    id: '26',
    image: '../../../assets/images/Roasted Chickpea.jpeg',
    category: 'grocery',
    name: 'Roasted Chickpea split',
    description: '500gms',
    price: 77
  },
  {
    id: '27',
    image: '../../../assets/images/Salt.jpeg',
    category: 'grocery',
    name: 'Salt',
    description: '500gms',
    price: 50
  },
  {
    id: '28',
    image: '../../../assets/images/Sugar.jpeg',
    category: 'grocery',
    name: 'Sugar',
    description: '500gms',
    price: 41
  },
  {
    id: '29',
    image: '../../../assets/images/Tamarind.jpeg',
    category: 'grocery',
    name: 'Tamarind',
    description: '250gms',
    price: 63
  },
  {
    id: '30',
    image: '../../../assets/images/Tomato.jpeg',
    category: 'vegetable',
    name: 'Tomato',
    description: '4pcs',
    price: 27
  },
  {
    id: '31',
    image: '../../../assets/images/Tur.jpeg',
    category: 'grocery',
    name: 'Tur Dal',
    description: '500gms',
    price: 109
  },
  {
    id: '32',
    image: '../../../assets/images/TurUp.jpeg',
    category: 'grocery',
    name: 'Tur Dal Unpolished split',
    description: '500gms',
    price: 74
  },
  {
    id: '33',
    image: '../../../assets/images/Urad white.jpeg',
    category: 'grocery',
    name: 'Urad White Dal split',
    description: '500gms',
    price: 200
  }
];

