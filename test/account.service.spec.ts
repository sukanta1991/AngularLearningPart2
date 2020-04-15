import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { AccountService } from '../src/app/services/account.service';
import { token, user } from './return-data';

describe('AccountService', () => {
  let httpMock: HttpTestingController;
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAccountDetails function', () => {
    // Testcase to check function existence
  });

  it('should have updateAccountDetails function', () => {
    // Testcase to check function existence
  });

  it('should get account details using getAccountDetails function', () => {
    // Testcase to check whether function returns account details of a customer of email 'bruno@email.com'
    // Use httpTestingController to create a mock backend to return a value(customer) from return-data.ts
    // mock backend should also check the header for Authorization key and also the method of the request
  });

  it('should update users account using updateAccountDetails function', () => {
    // Testcase to check whether function send a value(customer) from return-data.ts changed to backend
    // Use httpTestingController to create a mock backend to check whether sent customer from return-data.ts modified is correct
    // mock backend should also check the header for Authorization key and also the method of the request
  });

});
