import { OrderService } from 'src/app/services/order.service';
import { AccountService } from 'src/app/services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './../src/app/pages/header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from '../src/app/pages/account/account.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { user, ordersByCustomer } from './return-data';
import { of } from 'rxjs';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let accountService: AccountService;
  let orderService: OrderService;
  let fixture: ComponentFixture<AccountComponent>;
  const updatedUser = user;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent, HeaderComponent, FooterComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [AccountService, OrderService]
    })
    .compileComponents();
    accountService = TestBed.get(AccountService);
    orderService = TestBed.get(OrderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getOrders function', () => {
    // Testcase to check function existence
  });

  it('should have getUserDetails function', () => {
    // Testcase to check function existence
  });

  it('should have update function', () => {
    // Testcase to check function existence
  });

  it('getOrders should get all the orders of the user', () => {
    // Testcase to check whether function returns all orders of a customer using customer id '1'
    // Use spyOn to give a value(ordersByCustomer) from return-data.ts when a function of service is called
  });

  it('update function should update the user details in backend', () => {
    // Testcase to check whether function updates the customer updated details
    // Use spyOn to mock a function of service
  });

});
