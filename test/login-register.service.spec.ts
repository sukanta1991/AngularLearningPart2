import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginRegisterService } from '../src/app/services/login-register.service';
import { loginCredentials, token } from './return-data';

describe('LoginRegisterService', () => {
  let httpMock: HttpTestingController;
  let service: LoginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginRegisterService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(LoginRegisterService);
  });

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have login function', () => {
    // Testcase to check function existence
    expect(service.login).toBeDefined();
  });

  it('should have register function', () => {
    // Testcase to check function existence
    expect(service.register).toBeDefined();
  });

  it('register function should post data to backend', () => {
    // Testcase to check whether function send value(loginCredentials) from return-data.ts to backend
    // Use httpTestingController to create a mock backend to check whether sent value(loginCredentials) from return-data.ts is correct
    // mock backend should also check the header for Authorization key and also the method of the request
    service.register(loginCredentials).subscribe((data) => {      
      expect(data).not.toBe(null);
      expect(data).toEqual('success');
    });

    const req = httpMock.expectOne(`${environment.API_URL}/auth/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(loginCredentials);
    req.flush('success');
  });

  it('login function should return access_token', () => {
    // Testcase to check whether function send value(loginCredentials) from return-data.ts to backend
    // Use httpTestingController to create a mock backend to check whether sent value(loginCredentials) from return-data.ts is correct
    // mock backend should return value(token) from return-data.js
    // mock backend should also check the header for Authorization key and also the method of the request
    
    //service does not have any logic for header hence not writing test for it
    service.login(loginCredentials).subscribe((data) => {      
      expect(data).not.toBe(null);
      expect(data).toBe('success');
    });

    const req = httpMock.expectOne(`${environment.API_URL}/auth/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(loginCredentials);
    req.flush('success');
  });

});
