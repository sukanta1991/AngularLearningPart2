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

  it('should have calculate method', () => {
    expect(component.calculate).toBeTruthy();
  });

  it('should have getCart method', () => {
    expect(component.getCart).toBeTruthy();
  });

  it('should have remove method', () => {
    expect(component.remove).toBeTruthy();
  });

  it('should have update method', () => {
    expect(component.update).toBeTruthy();
  });

  it('should have checkOut method', () => {
    expect(component.checkOut).toBeTruthy();
  });

  it('calculate method calculates total and subTotal', () => {
    component.ngOnInit();
    expect(component.total).toEqual(4486);
    expect(component.subTotal[0]).toEqual(3430);
    expect(component.subTotal[1]).toEqual(1056);
  });

  it('remove method to remove first item in cart', () => {
    component.ngOnInit();
    component.remove(0);
    expect(component.total).toEqual(1056);
    expect(component.subTotal[0]).toEqual(1056);
  });

  it('remove method to remove an item in cart', () => {
    component.ngOnInit();
    component.remove(1);
    expect(component.total).toEqual(3430);
    expect(component.subTotal[0]).toEqual(3430);
  });

  it('checkOut method to add Order to backend', () => {
    component.ngOnInit();
    component.checkOut();
    expect(orderService.addOrders).toHaveBeenCalled();
    expect(sessionStorage.getItem('cart')).toBeNull();
  });


});
