import { OrderService } from 'src/app/services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './../src/app/pages/header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from '../src/app/pages/cart/cart.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { cart, user, order } from './return-data';
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
    expect(component.calculateTotal).toBeDefined();
  });

  it('should have getCart function', () => {
    // Testcase to check function existence
    expect(component.getCart).toBeDefined();
  });

  it('should have removeProduct function', () => {
    // Testcase to check function existence
    expect(component.removeProduct).toBeDefined();
  });

  it('should have updateQuantity function', () => {
    // Testcase to check function existence
    expect(component.updateQuantity).toBeDefined();
  });

  it('should have checkOut function', () => {
    // Testcase to check function existence
    expect(component.checkOut).toBeDefined();
  });

  it('calculateTotal function calculates total and subTotal', () => {
    // Testcase to check whether function to calulate total
    component.total = 0;
    component.items = cart;
    component.calculateTotal();
    expect(component.total).toBeGreaterThan(0);
    expect(component.subTotal[0]).toBeGreaterThan(0);
  });

  it('removeProduct function to remove first item in cart', () => {
    // Testcase to check whether function removes item from cart
    component.items = cart;
    component.removeProduct(0);
    expect(component.items.length).toBe(1);
    expect(component.items[0].productId).toBe('27');
  });

  it('removeProduct function to remove an item in cart', () => {
    // Testcase to check whether function removes item from cart
    component.items = JSON.parse(JSON.stringify(cart));
    let initialLength  = cart.length;
    component.removeProduct(0);
    expect(component.items.length).toBe(initialLength - 1);
  });

  it('checkOut function to add Order to backend', () => {
    // Testcase to check whether function adds a new order
    // Use spyOn to mock a function of service
    component.items = JSON.parse(JSON.stringify(cart));
    component.user = user;
    component.checkOut();
    expect(orderService.addOrders).toHaveBeenCalledTimes(1);
    expect(component.order.customerId).toBe(user.id);
  });


});
