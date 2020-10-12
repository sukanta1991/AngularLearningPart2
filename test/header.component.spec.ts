import { AccountService } from './../src/app/services/account.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../src/app/pages/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { token, loginCredentials, user } from './return-data';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ExpectedConditions } from 'protractor';

describe('HeaderComponent', () => {
  const newUser = { email: 'bruno@email.com', password: 'bruno' };
  let component: HeaderComponent;
  let service: LoginRegisterService;
  let accountService: AccountService;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let routerNavigateSpy;
  const mockElementRef: any = {
    nativeElement: {
      click() {
        return;
      }
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: HeaderComponent,
          },
        ]),
        HttpClientModule,
      ],
      providers: [LoginRegisterService, AccountService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    service = TestBed.get(LoginRegisterService);
    accountService = TestBed.get(AccountService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have createForm function', () => {
    // Testcase to check function existence
    expect(component.createForm).toBeDefined();
  });

  it('should have login function', () => {
    // Testcase to check function existence
    expect(component.logIn).toBeDefined();
  });

  it('should have register function', () => {
    // Testcase to check function existence
    expect(component.register).toBeDefined();
  });

  it('should have search function', () => {
    // Testcase to check function existence
    expect(component.search).toBeDefined();
  });

  it('should have loggedInCheck function', () => {
    // Testcase to check function existence
    expect(component.loggedInCheck).toBeDefined();
  });

  it('should have loginForm', () => {
    // Testcase to check formGroup existence
    expect(component.loginForm).toBeTruthy();
  });

  it('should have registerForm', () => {
    // Testcase to check formGroup existence
    expect(component.registerForm).toBeTruthy();
  });

  it('should have searchForm', () => {
    // Testcase to check formGroup existence
    expect(component.searchForm).toBeTruthy();
  });

  it('loginForm invalid when empty', () => {
    // Write logic here
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('registerForm invalid when empty', () => {
    // Write logic here
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('loginForm email field validity', () => {
    // Write logic here
    component.loginForm.setValue({password: 'test',email: 'abc'});
    expect(component.loginForm.valid).toBeFalsy();
    expect(component.loginForm.controls['email'].errors['email']).toBeTruthy();
    component.loginForm.setValue({email: 'abc@test.com',password: 'test'});
    expect(component.loginForm.valid).toBeTruthy();
    expect(component.loginForm.controls['email'].hasError('email')).toBeFalsy();
  });

  it('registerForm email field validity', () => {
    // Write logic here
    component.registerForm.setValue({
      password: 'test',
      email: 'abc1234',
      confirmPassword: 'abc1234'
    });
    expect(component.registerForm.valid).toBeFalsy();
    expect(component.registerForm.controls['email'].errors['email']).toBeTruthy();
    component.registerForm.setValue({
      email: 'abc@test.com',
      confirmPassword: 'abc1234',
      password: 'abc1234'
    });
    expect(component.registerForm.valid).toBeTruthy();
    expect(component.registerForm.controls['email'].hasError('email')).toBeFalsy();
  });

  it('login function authentication', () => {
    // Testcase to check whether function authenticate and store token in sessionStorage
    // Use spyOn to give a value or mock functions of service
    component.user = user;
    spyOn(service,'login').and.returnValue(of(token));
    spyOn(accountService,'getAccountDetails').and.returnValue(of());
    spyOn(accountService,'addAccountDetails').and.returnValue(of());
    component.logIn(loginCredentials);
    fixture.whenStable().then(() => {
      expect(component.isLoggedIn).toBeTruthy();
      expect(sessionStorage.getItem('user')).toBe(JSON.stringify(user));
    })
  });

  it('should create new user using register function', () => {
    // Testcase to check whether function register a new user
    // Use spyOn to mock a function of service
    const userCred = {
      email: 'abc@test.com',
      confirmPassword: 'abc1234',
      password: 'abc1234'
    };
    component.openModal = mockElementRef;
    component.user = JSON.parse(JSON.stringify(user));
    spyOn(service,'register').and.returnValue(of());
    component.register(userCred);
    fixture.whenStable().then(() => {
      expect(component.user.email).toBe(userCred.email);
      expect(component.user.password).toBe(userCred.password);
    })
  });
});
