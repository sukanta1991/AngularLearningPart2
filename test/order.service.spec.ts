import { environment } from 'src/environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OrderService } from '../src/app/services/order.service';
import { order, token } from './return-data';

describe('OrderService', () => {
  let httpMock: HttpTestingController;
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService],
    });
  });

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have addOrders function', () => {
    // Testcase to check function existence
  });

  it('should have getOrdersByCustomer function', () => {
    // Testcase to check function existence
  });

  it('getOrdersByCustomer function should get all orders of a customer', () => {
    // Testcase to check whether function returns all orders of a customer id '1'
    // Use httpTestingController to create a mock backend to return a value(ordersByCustomer) from return-data.ts
    // mock backend should also check the header for Authorization key and also the method of the request
  });

  it('addOrders function should add a order to backend', () => {
    // Testcase to check whether function send a value(order) from return-data.ts to backend
    // Use httpTestingController to create a mock backend to check whether sent value(order) from return-data.ts is correct
    // mock backend should also check the header for Authorization key and also the method of the request
  });

});
