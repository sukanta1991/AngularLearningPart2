import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from './../src/app/services/auth-guard.service';
import { TestBed } from '@angular/core/testing';
import { token } from './return-data';


describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuardService],
    });    
    service = TestBed.get(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have canActivate function', () => {
    expect(service.canActivate).toBeDefined();
  });

  it('canActivate function should check sessionStorage for token', () => {
    // Testcase to check whether function verifies user is authenticated
    sessionStorage.setItem('token',token.access_token);
    expect(service.canActivate()).toBeTruthy();
  });

});
