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

  it('should have getAccountDetails method', () => {
    // Write logic here
  });

  it('should have updateAccountDetails method', () => {
    // Write logic here
  });

  it('should get account details using getAccountDetails method', () => {
    // Write logic here;
  });

  it('should update users account using updateAccountDetails method', () => {
    // Write logic here
  });

});
