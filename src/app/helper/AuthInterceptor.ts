import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../appSerives/AuthenticationService';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.Token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.Token}`
                }
            });
        }

        return next.handle(request);
    }
}