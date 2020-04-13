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

  it('should have createForm method', () => {
    // Write logic here
  });

  it('should have login method', () => {
    // Write logic here
  });

  it('should have register method', () => {
    // Write logic here
  });

  it('should have search method', () => {
    // Write logic here
  });

  it('should have loggedInCheck method', () => {
    // Write logic here
  });

  it('should have loginForm', () => {
    // Write logic here
  });

  it('should have registerForm', () => {
    // Write logic here
  });

  it('should have searchForm', () => {
    // Write logic here
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

  it('loginForm email field validity', () => {
    // Write logic here
  });

  it('registerForm email field validity', () => {
    // Write logic here
  });

  it('login method authentication', () => {
    // Write logic here
  });

  it('should create new user using register method', () => {
    // Write logic here
  });
});
