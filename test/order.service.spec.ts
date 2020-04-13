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

  it('should have addOrders method', () => {
    // Write logic here
  });

  it('should have getOrdersByCustomer method', () => {
    // Write logic here
  });

  it('should get all orders of a customer', () => {
    // Write logic here
  });

  it('should add a order in backend', () => {
    // Write logic here
  });

});
