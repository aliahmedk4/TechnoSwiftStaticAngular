import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, timeout } from 'rxjs/operators';
import { CompanyService } from '../services/company.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private companyService:CompanyService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify the request if needed (e.g., adding headers)
    // const modifiedRequest = request.clone({ headers: ... });

    this.companyService.ShowHideSpinner(true);

    return next.handle(request).pipe(timeout(180000),
          map((event: HttpEvent<any>) => {
            return event;
          }),finalize(()=>{
              this.companyService.ShowHideSpinner(false);
        }),
      catchError((error: HttpErrorResponse) => {
        // Handle errors here
        console.error('HTTP Error:', error);
        return throwError(error);
      })
    );
  }
}

export const InterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
  ];
  