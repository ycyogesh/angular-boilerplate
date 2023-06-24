import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({  
      withCredentials:true,
      setHeaders: {  
        'X-Frame-Options': 'SAMEORIGIN',
        'Authorization' : `Bearer ${this.authService.getToken()}`,
        'sessionid' : `${this.authService.getSessionId()}`
      }
    }); 
    return next.handle(request);
  }
}
