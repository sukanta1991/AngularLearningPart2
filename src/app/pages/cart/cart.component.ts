import { OrderService } from './../../services/order.service';
import { Order, status } from './../../modals/order';
import { CartProduct } from './../../modals/cartProduct';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modals/customer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// Class used to display cart and calculate Total
export class CartComponent implements OnInit {
  emptyCart = true;
  items: CartProduct[] = [];
  user: Customer = {};
  total: number;
  order: Order = {};
  subTotal: number[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getCart();
    this.getUserDetails();
  }

  // Function to get the cartProducts from sessionStorage item 'cart' and calculate total and subtotal
  getCart() {
    this.items = JSON.parse(sessionStorage.getItem('cart'));
    if (this.items !== null) {
      this.emptyCart = false;
      this.calculate();
    }
  }

  getUserDetails() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  // Function to update quantity when changed
  update() {
    this.calculate();
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  // Function to calculate total and subtotal
  calculate() {
    this.total = 0;
    this.items.forEach( (item, i) => {
      this.subTotal[i] = item.price * item.quantity;
      this.total += this.subTotal[i];
    });
  }

  // Function to remove the product of given index
  remove(index) {
    this.items.splice(index, 1);
    this.calculate();
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  // Function to add the order to database and delete sessionStorage item 'cart'
  // get customerId from sessionStorage item 'user'
  checkOut() {
    this.order.cartProducts = this.items;
    this.order.customerId = this.user.id;
    this.order.billingAddress = this.user.address[0];
    this.order.deliveryAddress = this.user.address[0];
    this.order.paymentDetails = 'Card';
    this.order.billingDate = new Date();
    this.order.totalBill = this.total;
    this.order.status = status.OrderPlaced;
    sessionStorage.removeItem('cart');
    this.orderService.addOrders(this.order).subscribe();
  }
}
