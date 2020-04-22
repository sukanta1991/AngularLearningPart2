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
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('CartComponent', () => {
  let component: CartComponent;
  let orderService: OrderService;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent, HeaderComponent, FooterComponent ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
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

  it('should have calculateTotal function', () => {
    // Testcase to check function existence
  });

  it('should have getCart function', () => {
    // Testcase to check function existence
  });

  it('should have removeProduct function', () => {
    // Testcase to check function existence
  });

  it('should have updateQuantity function', () => {
    // Testcase to check function existence
  });

  it('should have checkOut function', () => {
    // Testcase to check function existence
  });

  it('calculateTotal function calculates total and subTotal', () => {
    // Testcase to check whether function to calulate total
  });

  it('removeProduct function to remove first item in cart', () => {
    // Testcase to check whether function removes item from cart
  });

  it('removeProduct function to remove an item in cart', () => {
    // Testcase to check whether function removes item from cart
  });

  it('checkOut function to add Order to backend', () => {
    // Testcase to check whether function adds a new order
    // Use spyOn to mock a function of service
  });


});
