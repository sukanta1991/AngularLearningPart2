import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginRegisterService } from '../src/app/services/login-register.service';
import { token } from './return-data';

describe('LoginRegisterService', () => {
  let httpMock: HttpTestingController;
  let service: LoginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginRegisterService],
    });
  });

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have login method', () => {
    // Write logic here
  });

  it('should have register method', () => {
    // Write logic here
  });

  it('register method should post data', () => {
    // Write logic here
  });

  it('login method should return access_token', () => {
    // Write logic here
  });

});
