import { AccountService } from './../src/app/services/account.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../src/app/pages/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { token } from './return-data';

describe('HeaderComponent', () => {
  const newUser = { email: 'bruno@email.com', password: 'bruno' };
  let component: HeaderComponent;
  let service: LoginRegisterService;
  let accountService: AccountService;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [LoginRegisterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have createForm function', () => {
    // Testcase to check function existence
  });

  it('should have login function', () => {
    // Testcase to check function existence
  });

  it('should have register function', () => {
    // Testcase to check function existence
  });

  it('should have search function', () => {
    // Testcase to check function existence
  });

  it('should have loggedInCheck function', () => {
    // Testcase to check function existence
  });

  it('should have loginForm', () => {
    // Testcase to check formGroup existence
  });

  it('should have registerForm', () => {
    // Testcase to check formGroup existence
  });

  it('should have searchForm', () => {
    // Testcase to check formGroup existence
  });

  it('loginForm invalid when empty', () => {
    // Write logic here
  });

  it('registerForm invalid when empty', () => {
    // Write logic here
  });

  it('loginForm email field validity', () => {
    // Write logic here
  });

  it('registerForm email field validity', () => {
    // Write logic here
  });

  it('login function authentication', () => {
    // Testcase to check whether function authenticate and store token in sessionStorage
    // Use spyOn to give a value or mock functions of service
  });

  it('should create new user using register function', () => {
    // Testcase to check whether function register a new user
    // Use spyOn to mock a function of service
  });
});
