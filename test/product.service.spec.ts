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
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductService);
  });

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAllProducts function', () => {
    // Testcase to check function existence
    expect(service.getAllProducts).toBeDefined();
  });

  it('should have getProductByCategory function', () => {
    // Testcase to check function existence
    expect(service.getProductsByCategory).toBeDefined();
  });

  it('getProductByCategory function should get 9 products of category fruit', () => {
    // Testcase to check whether function returns products of a category 'fruit'
    // Use httpTestingController to create a mock backend to return a value(fruitProducts) from return-data.ts
    // mock backend should also check the header for Authorization key and also the method of the request
    sessionStorage.setItem('token',token.access_token);
    service.getProductsByCategory('fruit').subscribe((data) => {      
      expect(data).not.toBe(null);
      expect(data).toEqual(fruitProducts);
      expect(data.length).toBe(9);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/products?category=fruit`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toContain(token.access_token);
    req.flush(fruitProducts);
    sessionStorage.removeItem('token');
  });

  it('getAllProducts function should get all 34 products', () => {
    // Testcase to check whether function returns all product
    // Use httpTestingController to create a mock backend to return a value(allProducts) from return-data.ts
    // mock backend should also check the header for Authorization key and also the method of the request
    sessionStorage.setItem('token',token.access_token);
    service.getAllProducts().subscribe((data) => {      
      expect(data).not.toBe(null);
      expect(data).toEqual(allProducts);
      expect(data.length).toBe(34);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/products`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toContain(token.access_token);
    req.flush(allProducts);
    sessionStorage.removeItem('token');
  });
});
