import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { AuthProvider } from './../auth/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth: AuthProvider)
    { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.token}`
            }
        });

        return next.handle(request).do(
            (event: HttpEvent<any>) => {},
            (error: any) => {
                if(error instanceof HttpErrorResponse)
                    if(error.status == 401)
                        this.auth.logout();
            });
    }

}
