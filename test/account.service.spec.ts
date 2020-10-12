import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { AccountService } from '../src/app/services/account.service';
import { token, user } from './return-data';
import { Customer } from 'src/app/modals/customer';

describe('AccountService', () => {
  let httpMock: HttpTestingController;
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAccountDetails function', () => {
    // Testcase to check function existence
    expect(service.getAccountDetails).toBeDefined();
  });

  it('should have updateAccountDetails function', () => {
    // Testcase to check function existence
    expect(service.updateAccountDetails).toBeDefined();
  });

  it('should get account details using getAccountDetails function', () => {
    // Testcase to check whether function returns account details of a customer of email 'bruno@email.com'
    // Use httpTestingController to create a mock backend to return a value(customer) from return-data.ts
    // mock backend should also check the header for Authorization key and also the method of the request
    sessionStorage.setItem('token',token.access_token);
    service.getAccountDetails('bruno@email.com').subscribe((data: Customer) => {      
      expect(data).not.toBe(null);
      expect(JSON.stringify(data)).toEqual(JSON.stringify(user));
    });

    const req = httpMock.expectOne(`${environment.API_URL}/customers?email=bruno@email.com`);
    expect(req.request.method).toBe('GET');    
    expect(req.request.headers.has('Authorization')).toEqual(true);
    expect(req.request.headers.get('Authorization')).toContain(token.access_token);
    req.flush(user);
    sessionStorage.removeItem('token');
  });

  it('should update users account using updateAccountDetails function', () => {
    // Testcase to check whether function send a value(customer) from return-data.ts changed to backend
    // Use httpTestingController to create a mock backend to check whether sent customer from return-data.ts modified is correct
    // mock backend should also check the header for Authorization key and also the method of the request
    sessionStorage.setItem('token',token.access_token);
    service.updateAccountDetails(user).subscribe((data: Customer) => {      
      expect(data).not.toBe(null);
      expect(JSON.stringify(data)).toEqual(JSON.stringify(user));
    });

    const req = httpMock.expectOne(`${environment.API_URL}/customers/${user.id}`);
    expect(req.request.method).toBe('PUT');    
    expect(req.request.headers.has('Authorization')).toEqual(true);
    expect(req.request.headers.get('Authorization')).toContain(token.access_token);
    req.flush(user);
    sessionStorage.removeItem('token');
  });

  it('should create users account using addAccountDetails method', () => {
    // Testcase to check whether function send a value(customer) from return-data.ts to backend
    // Use httpTestingController to create a mock backend to check whether sent customer from return-data.ts is correct
    // mock backend should also check the header for Authorization key and also the method of the request
    sessionStorage.setItem('token',token.access_token);
    service.addAccountDetails(user).subscribe((data: Customer) => {      
      expect(data).not.toBe(null);
      expect(JSON.stringify(data)).toEqual(JSON.stringify(user));
    });

    const req = httpMock.expectOne(`${environment.API_URL}/customers`);
    expect(req.request.method).toBe('POST');    
    expect(req.request.headers.has('Authorization')).toEqual(true);
    expect(req.request.headers.get('Authorization')).toContain(token.access_token);
    req.flush(user);
    sessionStorage.removeItem('token');
  });

});
