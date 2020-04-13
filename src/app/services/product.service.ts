import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../modals/product';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorHandler } from '../error-handler';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandler
  ) {}

  // Function to get all products available with JWT authentication token and error handling
  getAllProducts(): Observable<Product[]> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .get<Product[]>(environment.API_URL + '/products', httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }

  // Function to get all products of particular category with JWT authentication token and error handling
  getProductsByCategory(payload: string): Observable<Product[]> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .get<Product[]>(
        environment.API_URL + '/products?category=' + payload,
        httpOptions
      )
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }
}
