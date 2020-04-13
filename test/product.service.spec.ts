import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';

import { ProductService } from '../src/app/services/product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { allProducts, fruitProducts, token } from './return-data';

describe('ProductService', () => {
  let httpMock: HttpTestingController;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });

  });

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAllProducts method', () => {
    // Write logic here
  });

  it('should have getProductByCategory method', () => {
    // Write logic here
  });

  it('should get 9 products of category fruit', () => {
    // Write logic here
  });

  it('should get all 34 products', () => {
    // Write logic here
  });
});
