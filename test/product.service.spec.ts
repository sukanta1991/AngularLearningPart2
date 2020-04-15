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

  it('should have getAllProducts function', () => {
    // Testcase to check function existence
  });

  it('should have getProductByCategory function', () => {
    // Testcase to check function existence
  });

  it('getProductByCategory function should get 9 products of category fruit', () => {
    // Testcase to check whether function returns products of a category 'fruit'
    // Use httpTestingController to create a mock backend to return a value(fruitProducts) from return-data.ts
    // mock backend should also check the header for Authorization key and also the method of the request
  });

  it('getAllProducts function should get all 34 products', () => {
    // Testcase to check whether function returns all product
    // Use httpTestingController to create a mock backend to return a value(allProducts) from return-data.ts
    // mock backend should also check the header for Authorization key and also the method of the request
  });
});
