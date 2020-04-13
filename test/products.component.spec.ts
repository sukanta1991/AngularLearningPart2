import { of } from 'rxjs';
import { CartProduct } from './../src/app/modals/cartProduct';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from '../src/app/pages/products/products.component';
import { ProductService } from 'src/app/services/product.service';
import { HeaderComponent } from 'src/app/pages/header/header.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { Product } from 'src/app/modals/product';
import { Router, ActivatedRoute } from '@angular/router';
import { allProducts, fruitProducts, token } from './return-data';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, HeaderComponent, FooterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [ProductService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have add function', () => {
    // Write logic here
  });

  it('should have changeQuantitiy function', () => {
    // Write logic here
  });

  it('should have routeAnalyser function', () => {
    // Write logic here
  });

  it('add method should add to sessionStorage item "cart" ', () => {
    // Write logic here
  });

});

describe('ProductsComponent- get products of category fruit', () => {
  let component: ProductsComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductsComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, HeaderComponent, FooterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [ProductService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({
            category: 'fruit',
          }),
        },
      }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should get products of category fruit from ProductService', () => {
    // Write logic here
  });
});

describe('ProductsComponent- search for a product', () => {
  let component: ProductsComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductsComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, HeaderComponent, FooterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [ProductService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({
            name: 'apple',
          }),
        },
      }],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should get searched from ProductService', () => {
  // Write logic here
  });
});
