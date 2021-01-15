import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { loginService } from '../login/login.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private LoginService: loginService,
        private toastr: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 || err.status!=200) {
                // auto logout if 401 response returned from api
                setTimeout(() =>
                    {
                        this.toastr.error("Unable to connect to the Server","Server Issue");
                        this.LoginService.logout();
                        location.reload(true);
                    },
                    3000);
            }
            

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}