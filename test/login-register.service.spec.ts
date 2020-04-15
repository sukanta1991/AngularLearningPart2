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

  it('should have login function', () => {
    // Testcase to check function existence
  });

  it('should have register function', () => {
    // Testcase to check function existence
  });

  it('register function should post data to backend', () => {
    // Testcase to check whether function send value(loginCredentials) from return-data.ts to backend
    // Use httpTestingController to create a mock backend to check whether sent value(loginCredentials) from return-data.ts is correct
    // mock backend should also check the header for Authorization key and also the method of the request
  });

  it('login function should return access_token', () => {
    // Testcase to check whether function send value(loginCredentials) from return-data.ts to backend
    // Use httpTestingController to create a mock backend to check whether sent value(loginCredentials) from return-data.ts is correct
    // mock backend should return value(token) from return-data.js
    // mock backend should also check the header for Authorization key and also the method of the request
  });

});
