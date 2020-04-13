import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorHandler } from '../error-handler';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class LoginRegisterService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandler) {}

  // Function to send login data to the backend with error handling
  login(payload: object): Observable<any> {
    return this.http.post(environment.API_URL + '/auth/login', payload).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.errorHandler.handleError) // then handle the error
    );
  }

  // Function to send register data to the backend with error handling
  register(payload: object): Observable<any> {
    return this.http.post(environment.API_URL + '/auth/register', payload).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.errorHandler.handleError) // then handle the error
    );
  }
}
