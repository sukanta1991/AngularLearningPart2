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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    // Write logic here
  });

});
