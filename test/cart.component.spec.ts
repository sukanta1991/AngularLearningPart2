import { OrderService } from 'src/app/services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './../src/app/pages/header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from '../src/app/pages/cart/cart.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { cart, user } from './return-data';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let orderService: OrderService;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent, HeaderComponent, FooterComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [OrderService]
    })
    .compileComponents();
    orderService = TestBed.get(OrderService);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('user', JSON.stringify(user));
    spyOn(orderService, 'addOrders').and.returnValue(of(''));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have calculate function', () => {
    // Testcase to check function existence
  });

  it('should have getCart function', () => {
    // Testcase to check function existence
  });

  it('should have remove function', () => {
    // Testcase to check function existence
  });

  it('should have update function', () => {
    // Testcase to check function existence
  });

  it('should have checkOut function', () => {
    // Testcase to check function existence
  });

  it('calculate function calculates total and subTotal', () => {
    // Testcase to check whether function to calulate total
  });

  it('remove function to remove first item in cart', () => {
    // Testcase to check whether function removes item from cart
  });

  it('remove function to remove an item in cart', () => {
    // Testcase to check whether function removes item from cart
  });

  it('checkOut function to add Order to backend', () => {
    // Testcase to check whether function adds a new order
    // Use spyOn to mock a function of service
  });


});
