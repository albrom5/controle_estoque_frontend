import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse, 
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Provider } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) =>  {
        console.log('Unauthorized')
        console.log(err.status)
        console.log(err)
        const refreshUrl: string = `${environment.apiurl}/token/refresh`
        if (err.status === 401 && err.url !== refreshUrl){
          console.log('Refresh')
          this.authService.refresh().subscribe({
            next: data => {
              this.storageService.saveUser(data);
              window.location.reload();
            },
            error: err => {
              console.log('Redirect to login')
              this.storageService.logout();
              return this.router.navigate(['/login'])
            }
          })
        }       
        throw err
      })
    )
  }
}

export const errorInterceptorProvider: Provider = { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true };
