import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_auth/auth.service';
import { AppInitService } from '../_service/app-init.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private appinit: AppInitService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        debugger;
        if (this.authService.isAuthenticated() || this.appinit.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.appinit.token}`
                }
            });
        }

        return next.handle(request);
    }
}